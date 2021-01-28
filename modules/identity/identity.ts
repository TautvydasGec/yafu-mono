import {
  ap as AP,
  chain as CHAIN,
  extend as EXTEND,
  extract as EXTRACT,
  map as MAP,
  of as OF,
} from 'fantasy-land'
import {
  Monad,
  Chain,
  Apply,
  Comonad
} from './hej'

// eslint-disable-next-line no-use-before-define
export function identityOf <T> (v: T): Identity<T> {
  // eslint-disable-next-line no-use-before-define
  return new Identity(v)
}

export default class Identity<T> implements Chain<T>, Apply<T> {
  static [OF] = identityOf

  v: T

  constructor (v: T) {
    this.v = v
  }

  [MAP] <U> (f: (x: T) => U): Identity<U> {
    return identityOf(f(this.v))
  }

  [AP] <U> (b: Identity<(x: T) => U>): Identity<U> {
    return identityOf(b.v(this.v))
  }

  [CHAIN] <U> (f: (x: T) => Identity<U>): Identity<U> {
    return f(this.v)
  }

  [EXTEND] <U> (f: (x: Identity<T>) => U): Identity<U> {
    return identityOf(f(this))
  }

  [EXTRACT] (): T {
    return this.v
  }

  toString (): string {
    return `Identity[${this.v}]`
  }
}
