export default function setToArray <A>(set: Set<A>): A[] {
  const array = []
  set.forEach((item) => {
    array.push(item)
  })
  return array
}
