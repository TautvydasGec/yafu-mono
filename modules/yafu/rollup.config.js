import { terser } from 'rollup-plugin-terser'
import curry from '@yafu/rollup-plugin-curry'

export default {
  input: 'dist/index.js',
  plugins: [ curry() ],
  output: [ {
    file: 'dist/es/yafu.js',
    format: 'es',
    sourcemap: true,
  }, {
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
}
