import {
  ap as AP,
  chain as CHAIN,
  equals as EQUALS,
  extract as EXTRACT,
  map as MAP,
  of as OF,
  reduce as REDUCE,
} from 'fantasy-land'

export default class Const<T> {
  static [OF] <T> (v: T): Const<T> {
    return new Const(v)
  }

  v: T

  constructor (v: T) {
    this.v = v
  }

  [MAP] (): Const<T> {
    return this
  }

  [AP] (): Const<T> {
    return this
  }

  [CHAIN] (): Const<T> {
    return this
  }

  [EXTRACT] (): T {
    return this.v
  }

  [REDUCE] <U> (f: (acc: U, item: T) => U, x: U): U {
    return f(x, this.v)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  [EQUALS] (b: any): boolean {
    return b instanceof Const && b.v === this.v
  }

  toString (): string {
    return `Const[${this.v}]`
  }
}

export function constOf <T> (v: T): Const<T> {
  return new Const(v)
}
