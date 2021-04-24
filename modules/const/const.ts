import {
  ap as AP,
  chain as CHAIN,
  equals as EQUALS,
  extract as EXTRACT,
  map as MAP,
  of as OF,
  reduce as REDUCE,
} from 'fantasy-land'
import { HKT, Functor, Foldable } from '@yafu/fantasy-types'

interface ConstHKT extends HKT {
    output: Const<this["input"]>;
}

export default class Const<T> implements Functor<T>, Foldable<T> {
  static [OF] <T> (v: T): Const<T> {
    return new Const(v)
  }

  hkt!: ConstHKT
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

  [REDUCE] <U> (_f: (acc: U, item: T) => U, x: U): U {
    return x
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
