import pkg from './package.json'
import createRollupConfig from '../../create-rollup-config.js'

export default createRollupConfig('./const.ts', pkg)
