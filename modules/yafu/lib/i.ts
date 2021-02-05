import curry from './curry'

/**
 * Returns the argument it is given.
 *
 * @arg x {any} The value that will be returned.
 */
function I <A> (x: A): A {
  return x
}

export default curry(I)
