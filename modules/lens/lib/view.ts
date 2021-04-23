import { extract } from '@yafu/fantasy-functions'
import { constOf } from '@yafu/const'
import { Lens } from './lens'

function view <F, T> (lens: Lens<F, T>, value: T): F {
  const l = lens(constOf, value)
  return extract(l)
}

export default view
