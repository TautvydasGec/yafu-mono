import curry from './curry'

/**
 * Check for equality with using the === binary operator.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function eq (a: any, b: any): boolean {
  return a === b
}

export default curry(eq)
