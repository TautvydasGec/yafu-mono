/**
 * Applies a unary function to the supplied argument.
 *
 * @function callWith
 * @arg x {any} The agument to the unary function
 * @arg f {function} A unary function
 */
export default function callWith (x, f) {
  return f(x)
}
