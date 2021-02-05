import Either, { left } from '@yafu/either'
import { curry, flip } from 'yafu'
import { map } from '@yafu/fantasy-functions'

function lens <T, F> (
  getter: (a: T) => F,
  setter: (a: F, t: T) => T,
  createEither: (f: F) => Either<T, F>,
  target: T,
) {
  const initialFocus = getter(target)
  if (initialFocus == null) return left(target)

  const either = createEither(initialFocus)
  return map(flip(setter, target), either)
}

export default curry(lens)
