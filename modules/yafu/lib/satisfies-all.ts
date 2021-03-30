import drop from './drop.js'
import isEmpty from './is-empty.js'

/**
 * Determines if a value statisfies a list of predicates. Returns `true` unless any predicate
 * function returns `false` when applied to the value.
 *
 * @arg predicates {[Function]} The list of predicate functions to apply to the value
 * @arg val {any} The value to check
 */
export default function satisfiesAll <T, P extends (a: T) => boolean> (predicates: P[], val: T): boolean {
  return isEmpty(predicates)
    || (predicates[0](val) === true && satisfiesAll(drop(1, predicates), val))
}
