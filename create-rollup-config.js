import typescript2 from 'rollup-plugin-typescript2'

export default function createRollupConfig (input, pkg) {
  const { main, exports: { import: esFile } } = pkg
  return {
    input,
    treeshake: {
      moduleSideEffects: false,
    },
    plugins: [
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
}
