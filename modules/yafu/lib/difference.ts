import curry from './curry'
import arrayToSet from './_arrayToSet'

/**
 * Creates a new list of unique values that are included in the first list but
 * not in the second list
 *
 * @function difference
 * @arg {Array} list1  The first list
 * @arg {Array} list2  The second list
 * @return {Array} A list of unique elements in list1 that are not in list2
 *
 */
function difference <T> (list1: T[], list2: T[]): T[] {
  const lookupSet = arrayToSet(list2)
  const out: T[] = []
  for (let i = 0; i < list1.length; i++) {
    const item = list1[i]
    if (!lookupSet.has(item)) {
      out.push(item)
      lookupSet.add(item)
    }
  }

  return out
}

export default curry(difference)
