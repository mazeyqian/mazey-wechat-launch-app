/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import babel from 'rollup-plugin-babel';
import rollupTypescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import cleaner from 'rollup-plugin-cleaner';
import { terser } from 'rollup-plugin-terser';

const path = require('path');
const _resolve = (_path) => path.resolve(__dirname, _path);
const pkgName = require('../package.json').name;
const iifeName = pkgName.replace(/-/g, '_').toUpperCase();
const pkgVersion = process.env.SCRIPTS_NPM_PACKAGE_VERSION || process.env.VERSION || require('../package.json').version;
const banner =
  '/*!\n' +
  ` * ${pkgName} v${pkgVersion} https://www.npmjs.com/package/mazey-wechat-launch-app\n` +
  ` * (c) 2018-${new Date().getFullYear()} Cheng\n` +
  ' * Released under the MIT License.\n' +
  ' */';

const plugins = [
  rollupTypescript(),
  commonjs({
    include: /node_modules/,
  }),
  babel({
    runtimeHelpers: true,
    // 只转换源代码，不运行外部依赖
    exclude: 'node_modules/**',
    // babel 默认不支持 ts 需要手动添加
    extensions: [
      ...DEFAULT_EXTENSIONS,
      '.ts',
    ],
  }),
  // Add minification.
  // https://github.com/TrySound/rollup-plugin-terser
  terser({ // https://github.com/terser/terser
    format: {
      // https://github.com/terser/terser#format-options
      comments: /^!\n\s\*\smazey-wechat-launch-app/, // 'some', // `false` to omit comments in the output
    },
  }),
];

// https://rollupjs.org/guide/en/
export default [
  {
    input: _resolve('../src/index.ts'),
    // https://rollupjs.org/guide/en/#outputformat
    output: [
      {
        file: _resolve('../lib/index.cjs.js'),
        format: 'cjs',
        exports: 'auto',
        banner,
      },
      {
        file: _resolve('../lib/index.esm.js'),
        format: 'esm',
        banner,
      },
    ],
    plugins: [
      // Remove the `lib` directory before rebuilding.
      // https://github.com/aMarCruz/rollup-plugin-cleanup
      cleaner({
        targets: [
          _resolve('../lib/'),
        ],
      }),
      ...plugins,
    ],
    external: ['mazey', 'jquery', 'js-sha1'],
  },
  {
    input: _resolve('../src/index.ts'),
    // https://rollupjs.org/guide/en/#outputformat
    output: [
      {
        file: _resolve(`../lib/${'launch-app' || pkgName}.min.js`),
        format: 'iife',
        name: 'LAUNCH_APP' || iifeName,
        banner,
      },
    ],
    plugins: [
      resolve(),
      ...plugins,
    ],
    external: [],
  },
];
