import { reduce } from '@yafu/fantasy-functions'
import { K, flip } from 'yafu'
import { identityOf } from '@yafu/identity'
import { constOf } from '@yafu/const'
import { Lens, FoldableFunctor } from './lens'

function over <F, T, U extends F>(lens: Lens<F, T>, f: (a: F) => U, target: T): T {
  function createOverFunctor (focus: F): FoldableFunctor<F> {
    const newValue = f(focus)
    return (newValue === focus ? constOf(target) : identityOf(newValue)) as FoldableFunctor<F>
  }

  const functor = lens(createOverFunctor, target)
  return reduce(flip(K), target, functor) as T
}

export default over
