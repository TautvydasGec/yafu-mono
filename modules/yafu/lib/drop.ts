/**
 * Remove the first n elements from a list.
 *
 * @arg n {Number} The number of elements to remove.
 * @arg list {Array} The list to remove the elements from.
 */
export default function drop <T> (n: number, list: T[]) {
  return list.slice(n)
}
