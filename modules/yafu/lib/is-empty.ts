import curry from './curry'

/**
 * Returns true if the list is empty.
 *
 * @arg list {Array} The list to check if it is empty or not.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEmpty (list: any[]): boolean {
  return list.length === 0
}

export default curry(isEmpty)
