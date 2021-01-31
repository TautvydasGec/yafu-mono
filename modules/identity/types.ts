import * as FL from 'fantasy-land'

export interface Setoid {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [FL.equals]: (a: any) => boolean
}

export interface Ord extends Setoid {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [FL.lte]: (a: any) => boolean
}

export interface Semigroupoid<T> {
  [FL.compose]: (a: Semigroupoid<T>) => Semigroupoid<T>
}

export interface Category<T> extends Semigroupoid<T> {
  [FL.id]: () => Category<T>
}

export interface Semigroup<T> {
  [FL.concat]: (a: Semigroup<T>) => Semigroup<T>
}

export interface Monoid<T> extends Semigroup<T> {
  [FL.empty]: () => Monoid<T>
}

export interface Group<T> extends Monoid<T> {
  [FL.invert]: () => Group<T>
}

export interface Filterable<T> {
  [FL.filter]: (a: (x: T) => boolean) => Filterable<T>
}

export interface Functor<T> {
  [FL.map]: <U>(a: (x: T) => U) => Functor<U>
}

export interface Contravariant<T> {
  [FL.contramap]: <U>(a: (x: U) => T) => Contravariant<U>
}

export interface Apply<T> extends Functor<T> {
  [FL.ap]: <U>(a: Apply<(x: T) => U>) => Apply<U>
}

export interface Applicable<T> extends Apply<T> {
  [FL.of]: (a: T) => Applicable<T>
}

export interface Alt<T> extends Functor<T> {
  [FL.alt]: (a: Alt<T>) => Alt<T>
}

export interface Plus<T> extends Alt<T> {
  [FL.zero]: () => Plus<T>
}

export interface Foldable<T> {
  [FL.reduce]: <U>(a: (x: U, y: T) => U, b: U) => U
}

export interface Traversible<T> extends Functor<T>, Foldable<T> {
  [FL.traverse]: <U>(a: Applicable<T>, b: (x: T) => U) => Applicable<Traversible<U>>
}

export interface Chain<T> extends Apply<T> {
  [FL.chain]: <U>(a: (x: T) => Chain<U>) => Chain<U>
}

export interface ChainRec<T> extends Chain<T> {
  [FL.chainRec]: <U>(a: (x: T) => U, b: (x: U) => U, c: T) => ChainRec<U>
}

export interface Extend<T> extends Functor<T> {
  [FL.extend]: <U>(a: (x: Extend<T>) => U) => Extend<U>
}

export interface Comonad<T> extends Extend<T> {
  [FL.extract]: () => T
}

export interface Bifunctor<T, U> extends Functor<U> {
  [FL.bimap]: <V, Z>(a: (x: T) => V, b: (y: U) => Z) => Bifunctor<V, Z>
}

export interface Promap<T, U> extends Functor<U> {
  [FL.promap]: <V, Z>(a: (x: V) => T, b: (y: U) => Z) => Promap<V, Z>
}
