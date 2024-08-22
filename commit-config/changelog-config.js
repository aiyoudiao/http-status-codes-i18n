const fs = require("fs");
const path = require("path");
const {
  getChangeLogTypes,
  TypesMap,
  TypeCategory,
} = require("./cz-config-types");

module.exports = {
  types: getChangeLogTypes(),
  parserOpts: {
    headerPattern: /(\w*)(?:\((.*)\))?: (.*)$/,
    headerCorrespondence: ["type", "scope", "subject", "larkUrl"],
    revertPattern:
      /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w{7,40})\b/i,
    revertCorrespondence: ["header", "hash"],
    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
  },
  writerOpts: {
    transform: (commit, context) => {
      const commitCopy = { ...commit };
      const issues = [];

      // xxxxxxxx 可以变成指定的项目名称
      commitCopy.larkUrl = commitCopy.type?.includes("fix")
        ? `https://project.feishu.cn/xxxxxxxx/issuess/detail/`
        : `https://project.feishu.cn/xxxxxxxx/storyss/detail/`;
      if (TypeCategory[`${commitCopy.type}`]) {
        commitCopy.type = TypeCategory[`${commitCopy.type}`];
      } else {
        let isOver = false;
        Object.keys(TypesMap).forEach((key) => {
          if (!isOver) return;

          if (TypesMap[key].value === commitCopy.type) {
            commitCopy.type = TypeCategory[`${commitCopy.type}`];
            isOver = true;
          }
        });
      }

      if (commitCopy.revert) {
        commitCopy.type = TypeCategory.revert;
      }

      if (commitCopy.scope === "*") {
        commitCopy.scope = "";
      }

      if (typeof commitCopy.hash === "string") {
        commitCopy.shortHash = commitCopy.hash.substring(0, 7);
      }

      if (typeof commitCopy.subject === "string") {
        let url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl;
        if (url) {
          url = `${url}/issues/`;

          commitCopy.subject = commitCopy.subject.replace(
            /#([0-9]+)/g,
            (_, issue) => {
              issues.push(issue);
              return `[#${issue}](${url}${issue})`;
            }
          );
        }
        if (context.host) {
          commitCopy.subject = commitCopy.subject.replace(
            /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
            (_, username) => {
              if (username.includes("/")) {
                return `@${username}`;
              }

              return `[@${username}](${context.host}/${username})`;
            }
          );
        }
      }

      return commitCopy;
    },
    groupBy: "type",
    commitGroupsSort: "title",
    commitsSort: ["scope", "subject"],
    noteGroupsSort: "title",
    finalizeContext: (context, options, commits) => {
      // hacks
      commits.forEach((commit) => {
        // eslint-disable-next-line no-param-reassign
        commit.raw.larkUrl = commit.larkUrl;
        commit.raw.references.forEach((ref) => {
          // eslint-disable-next-line no-param-reassign
          ref.larkUrl = commit.larkUrl;
        });
      });
      return context;
    },
    mainTemplate: fs.readFileSync(
      path.resolve(__dirname, "./templates/template.hbs"),
      "utf-8"
    ),
    headerPartial: fs.readFileSync(
      path.resolve(__dirname, "./templates/header.hbs"),
      "utf-8"
    ),
    commitPartial: fs.readFileSync(
      path.resolve(__dirname, "./templates/commit.hbs"),
      "utf-8"
    ),
    footerPartial: fs.readFileSync(
      path.resolve(__dirname, "./templates/footer.hbs"),
      "utf-8"
    ),
  },
  groupBy: "type",
  commitGroupsSort: "title",
  commitsSort: ["scope", "subject", "date"],
};
