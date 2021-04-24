import {
  ap as AP,
  chain as CHAIN,
  extract as EXTRACT,
  reduce as REDUCE,
  map as MAP,
  of as OF,
} from 'fantasy-land'
import { HKT, Functor, Foldable } from '@yafu/fantasy-types'

export function identityOf <T> (v: T): Identity<T> {
  return new Identity(v) // eslint-disable-line no-use-before-define
}
interface IdentityHKT extends HKT {
    output: Identity<this["input"]>;
}

// Identity is an example of a functor but other classes can implement it as well
export default class Identity<T> implements Functor<T>, Foldable<T> {
  static [OF] <T> (v: T): Identity<T> {
    return identityOf(v)
  }

  hkt!: IdentityHKT
  v: T

  constructor (v: T) {
    this.v = v
  }

  [MAP] <U> (f: (a: T) => U): Identity<U> {
    return identityOf(f(this.v))
  }

  [AP] <U> (b: Identity<(a: T) => U>): Identity<U> {
    return identityOf(b.v(this.v))
  }

  [CHAIN] <U> (f: (a: T) => Identity<U>): Identity<U> {
    return f(this.v)
  }

  [REDUCE] <U> (f: (acc: U, item: T) => U, x: U): U {
    return f(x, this.v)
  }

  [EXTRACT] (): T {
    return this.v
  }

  toString (): string {
    return `Identity[${this.v}]`
  }
}
