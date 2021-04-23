export const equals = {
  name: 'Setoid',
  generics: [],
  args: [ '_any' ],
  returnType: 'boolean',
}

export const lte = {
  name: 'Ord',
  generics: [],
  extending: [ 'Setoid' ],
  args: [ '_any' ],
  returnType: 'boolean',
}

export const compose = {
  name: 'Semigroupoid',
  generics: [ 'T' ],
  args: [ '_sameType<T>' ],
  returnType: 'Semigroupoid<T>',
}

export const id = {
  name: 'Category',
  generics: [ 'T' ],
  extending: [ 'Semigroupoid' ],
  args: [],
  isStatic: true,
  returnType: 'Category<T>',
}

export const concat = {
  name: 'Semigroup',
  generics: [ 'T' ],
  args: [ '_sameType<T>' ],
  returnType: 'Semigroup<T>',
}

export const empty = {
  name: 'Monoid',
  generics: [ 'T' ],
  extending: [ 'Semigroup' ],
  args: [],
  isStatic: true,
  returnType: 'Monoid<T>',
}

export const invert = {
  name: 'Group',
  generics: [ 'T' ],
  extending: [ 'Monoid' ],
  args: [],
  returnType: 'Group<T>',
}

export const filter = {
  name: 'Filterable',
  generics: [ 'T' ],
  args: [ '(x: T) => boolean' ],
  returnType: 'Filterable<T>',
}

export const map = {
  name: 'Functor',
  generics: [ 'T' ],
  args: [ '(x: T) => U' ],
  returnType: 'Functor<U>',
}

export const contramap = {
  name: 'Contravariant',
  generics: [ 'T' ],
  args: [ '(x: U) => T' ],
  returnType: 'Contravariant<U>',
}

export const ap = {
  name: 'Apply',
  generics: [ 'T' ],
  extending: [ 'Functor' ],
  args: [ '_sameType<(x: T) => U>' ],
  returnType: 'Apply<U>',
}

export const of = {
  name: 'Applicable',
  generics: [ 'T' ],
  extending: [ 'Apply' ],
  args: [ 'T' ],
  isStatic: true,
  returnType: 'Applicable<T>',
}

export const alt = {
  name: 'Alt',
  generics: [ 'T' ],
  extending: [ 'Functor' ],
  args: [ '_sameType<T>' ],
  returnType: 'Alt<T>',
}

export const zero = {
  name: 'Plus',
  generics: [ 'T' ],
  extending: [ 'Alt' ],
  args: [],
  isStatic: true,
  returnType: 'Plus<T>',
}

export const reduce = {
  name: 'Foldable',
  generics: [ 'T' ],
  args: [ '(x: U, y: T) => U', 'U' ],
  returnType: 'U',
}

export const traverse = {
  name: 'Traversible',
  generics: [ 'T' ],
  extending: [ 'Functor', 'Foldable' ],
  args: [ '_constructor:Applicable<T>', '(x: T) => U' ],
  returnType: 'Applicable<Traversible<U>>',
}

export const chain = {
  name: 'Chain',
  generics: [ 'T' ],
  extending: [ 'Apply' ],
  args: [ '(x: T) => _sameType<U>' ],
  returnType: 'Chain<U>',
}

export const chainRec = {
  name: 'ChainRec',
  generics: [ 'T' ],
  extending: [ 'Chain' ],
  args: [
    '(x: T) => U',
    '(x: U) => U',
    'T',
  ],
  returnType: 'ChainRec<U>',
  isStatic: true,
}

export const extend = {
  name: 'Extend',
  generics: [ 'T' ],
  extending: [ 'Functor' ],
  args: [ '(x: Extend<T>) => U' ],
  returnType: 'Extend<U>',
}

export const extract = {
  name: 'Comonad',
  generics: [ 'T' ],
  extending: [ 'Extend' ],
  args: [],
  returnType: 'T',
}

export const bimap = {
  name: 'Bifunctor',
  generics: [ 'T', 'U' ],
  extending: [ 'Functor' ],
  extendingGenerics: [ 'U' ],
  args: [ '(x: T) => V', '(y: U) => Z' ],
  returnType: 'Bifunctor<V, Z>',
}

export const promap = {
  name: 'Promap',
  generics: [ 'T', 'U' ],
  extending: [ 'Functor' ],
  extendingGenerics: [ 'U' ],
  args: [ '(x: V) => T', '(y: U) => Z' ],
  returnType: 'Promap<V, Z>',
}
