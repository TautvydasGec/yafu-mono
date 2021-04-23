import { extract } from '@yafu/fantasy-functions'
import { constOf } from '@yafu/const'

function view (lens, value) {
  return extract(lens(constOf, value))
}

export default view
