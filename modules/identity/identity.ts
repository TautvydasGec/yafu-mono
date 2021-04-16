import {
  ap as AP,
  chain as CHAIN,
  extract as EXTRACT,
  map as MAP,
  of as OF,
} from 'fantasy-land'

export function identityOf <T> (v: T): Identity<T> {
  return new Identity(v) // eslint-disable-line no-use-before-define
}

export default class Identity<T> {
  static [OF] <T> (v: T): Identity<T> {
    return identityOf(v)
  }

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

  [EXTRACT] (): T {
    return this.v
  }

  toString (): string {
    return `Identity[${this.v}]`
  }
}
