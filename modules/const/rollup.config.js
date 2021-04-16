import resolve from '@rollup/plugin-node-resolve'
import typescript2 from 'rollup-plugin-typescript2'

import pkg from './package.json'

const { main, exports: { import: esFile } } = pkg

export default {
  input: './const.ts',
  treeshake: {
    moduleSideEffects: false,
  },
  plugins: [
    resolve(),
    typescript2(),
  ],
  output: [ {
    file: esFile,
    format: 'es',
  }, {
    file: main,
    format: 'cjs',
  } ],
}
