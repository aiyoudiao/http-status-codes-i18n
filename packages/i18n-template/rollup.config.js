const { withNx } = require('@nx/rollup/with-nx');
const terser = require('@rollup/plugin-terser');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../../dist/packages/i18n-template',
    tsConfig: '../../tsconfig.lib.json',
    compiler: 'swc',
    format: ['cjs', 'esm', 'es', 'amd', 'iife', 'umd', 'system'],
    // format: ['cjs', 'esm'],
    assets: [{ input: '.', output: '.', glob: 'packages/i18n-template/*.md' }],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    output: { name: 'i18nTemplate', sourcemap: true, extend: true },
    plugins: [
      terser({
        format: {
          comments: false,
        },
        compress: {
          drop_console: true,
          passes: 3, // 多次压缩，提高效果
          hoist_funs: true, // 提升函数声明
          reduce_vars: true, // 减少变量使用
          collapse_vars: true, // 合并变量
        },
        mangle: {
          properties: {
            regex: /^_/, // 选择性的混淆变量名（以_开头的变量名）
          },
        },
      }),
    ],
  }
);
