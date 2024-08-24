const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../../dist/packages/i18n-zh',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['cjs', 'esm', 'es', 'amd', 'iife', 'umd', 'system'],
    assets: [{ input: '.', output: '.', glob: 'packages/i18n-zh/*.md' }],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    output: { name: 'i18nZh', sourcemap: true, extend: true },
  }
);
