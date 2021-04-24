import { K, flip } from 'yafu'
import { reduce } from '@yafu/fantasy-functions'
import { constOf } from '@yafu/const'
import { Lens } from './lens'

function view <F, T> (defaultVal: F, lens: Lens<F, T>, value: T): F {
  const l = lens(constOf, value)
  return reduce(flip(K), defaultVal, l) as F
}

export default view
