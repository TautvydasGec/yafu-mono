import { K } from 'yafu'
import { left, cata } from '@yafu/either'
import { Lens } from './lens'

function defaultTo <T> (d: T) {
  return (v: T) => (v == null ? d : v)
}

function view <F, T> (defaultVal: F, lens: Lens<F, T>, value: T): F {
  const either = lens(left, value)
  return cata(defaultTo(defaultVal), K(defaultVal), either)
}

export default view
