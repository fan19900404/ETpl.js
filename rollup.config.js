import resolve from 'rollup-plugin-node-resolve';
import {
  uglify
} from 'rollup-plugin-uglify';
import rollupTypescript from 'rollup-plugin-typescript';

import {
  name,
  version,
  author,
  homepage
} from './package.json';

const banner = `
/*!
* ${name} v${version}
* github:${homepage}
* (c) 2018-${new Date().getFullYear()} ${author}
* Released under the MIT License.
*/
`.trim();

export default [{
    input: 'src/index.ts',
    output: {
      file: 'dist/etpl.min.js',
      format: 'iife',
      // format: 'umd',
      name: 'etpl',
      sourcemap: true,
      // exports: 'named',
    },
    plugins: [
      resolve(),
      // babel({
      //   exclude: 'node_modules/**', // 只编译我们的源代码
      // }),
      rollupTypescript({
        lib: ["es5", "es6", "dom"],
        target: "ES3",
        removeComments:true,
        declaration: true,
      }),
      uglify({
        output: {
          preamble: banner,
        },
        // 为了兼容IE8
        ie8: true,
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/etpl.cjs.js',
      format: 'cjs',
      // format: 'umd',
      name: 'etpl',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      rollupTypescript({
        lib: ["es6", "dom"],
        target: "es5",
        removeComments:true
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/etpl.es.js',
      format: 'es',
      // format: 'umd',
      name: 'etpl',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      rollupTypescript({
        lib: ["esNext", "dom"],
        target: "es6",
        declaration: true,
        removeComments:true
      })
    ]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/etpl.umd.js',
      // format: 'es',
      format: 'umd',
      name: 'etpl',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      resolve(),
      rollupTypescript({
        lib: ["es5", "es6", "dom"],
        target: "ES3",
        removeComments:true,
        declaration: true,
      }),
      uglify({
        output: {
          preamble: banner,
        },
        // 为了兼容IE8
        ie8: true,
      }),
    ],
  },
];