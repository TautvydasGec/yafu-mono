import resolve from '@rollup/plugin-node-resolve'
import typescript2 from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import curry from '@yafu/rollup-plugin-curry'

export default [ {
  input: 'dist/index.js',
  external: [ '@yafu/curry' ],
  plugins: [ typescript2(), curry() ],
  output: {
    file: 'dist/es/yafu.js',
    format: 'es',
    sourcemap: true,
  },
}, {
  input: 'lib/index.ts',
  plugins: [ resolve(), typescript2(), curry() ],
  output: [ {
    file: 'dist/umd/yafu.js',
    format: 'umd',
    name: 'yafu',
    sourcemap: true,
  }, {
    file: 'dist/umd/yafu.min.js',
    format: 'umd',
    name: 'yafu',
    plugins: [ terser() ],
    sourcemap: true,
  } ],
} ]
