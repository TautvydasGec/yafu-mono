/**
 * Composes a binary function with a unary functon. The unary function will be
 * applied to the result of the binary function.
 *
 * @arg f {Function} A unary function
 * @arg g {Function} A binary function
 * @arg x {Any} The first value to pass to the binary function
 * @arg y {Any} The second value to pass to the binary function
 */
export default function composeBinary (f, g, x, y) {
  return f(g(x, y))
}
