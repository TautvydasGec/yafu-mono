import curry from './curry'

/**
 * Calls a function after flippng the order of the first two arguments
 *
 * @arg f {function} The function to call.
 * @arg x {any} The second argument to pass to the function.
 * @arg y {any} The first argument to pass to the function.
 *
 */
function flip <A, B, C> (f: (a: A, b: B) => C, x: B, y: A) {
  return f(y, x)
}

export default curry(flip)
