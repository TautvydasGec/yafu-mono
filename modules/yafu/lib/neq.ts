import curry from './curry'

/**
 * Check for non equality with using the !== binary operator.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function neq (a: any, b: any): boolean {
  return a !== b
}

export default curry(neq)
