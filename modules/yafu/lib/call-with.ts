import curry from './curry'

/**
 * Applies a unary function to the supplied argument.
 *
 * @function callWith
 * @arg x {any} The agument to the unary function
 * @arg f {function} A unary function
 */
function callWith <A, B> (x: A, f: (a: A) => B) {
  return f(x)
}

export default curry(callWith)
