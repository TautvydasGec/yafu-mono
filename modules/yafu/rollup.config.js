import resolve from '@rollup/plugin-node-resolve'
import typescript2 from 'rollup-plugin-typescript2'
import { sync as glob } from 'glob'
import sortDependencies from 'sort-dependencies'
import { terser } from 'rollup-plugin-terser'
import curry from '@yafu/rollup-plugin-curry'

const files = glob('lib/*')
const fileGroups = sortDependencies({
  distFolderPath: 'dist',
  files,
  group: true,
})

const initial = fileGroups.map((input) => ({
  input,
  external: () => true,
  plugins: [ typescript2(), curry() ],
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
  },
}))

export default [
  ...initial,
  {
    input: 'dist/index.js',
    plugins: [ resolve() ],
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
  },
]
