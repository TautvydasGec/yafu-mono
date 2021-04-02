import { camelCase } from 'camel-case'
import runTests from './run-tests'

const bundle = require('../dist/umd/yafu')
const minified = require('../dist/umd/yafu.min')

function upperFirst (string) {
  return string[0].toUpperCase() + string.substring(1)
}

function getBundleFunction (b) {
  return (name) => {
    const camelCaseName = camelCase(name)
    return b[camelCaseName] || b[upperFirst(camelCaseName)]
  }
}

describe('yafu bundle', runTests(getBundleFunction(bundle), true))
describe('yafu bundle minified', runTests(getBundleFunction(minified), true))
