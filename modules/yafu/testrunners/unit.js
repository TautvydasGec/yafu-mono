import { camelCase } from 'camel-case'
import * as yafu from '../dist'
import runTests from './run-tests'

function getFunction (fileName) {
  const name = fileName.length === 1 ? fileName.toUpperCase() : camelCase(fileName)
  return yafu[name]
}

describe('yafu', runTests(getFunction))
