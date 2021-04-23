import { flip } from 'yafu'
import { Comonad } from '@yafu/fantasy-types'
import { map } from '@yafu/fantasy-functions'
import { constOf } from '@yafu/const'

export type Lens<F, T> = (createFunctor: (focus: F) => Comonad<F>, target: T) => Comonad<T>

export default function lens <F, T> (
  getter: (target: T) => F,
  setter: (focus: F, target: T) => T,
): Lens<F, T> {
  return (createFunctor: (focus: F) => Comonad<F>, target: T): Comonad<T> => {
    const initialFocus = getter(target)
    if (initialFocus == null) return constOf(target)

    const functor = createFunctor(initialFocus)
    const setOnTarget = flip(setter, target)
    return map(setOnTarget, functor) as Comonad<T>
  }
}
