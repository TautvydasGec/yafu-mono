import { K, curry } from 'yafu'
import over from './over'

function set (lens, value, target) {
  return over(lens, K(value), target)
}

export default curry(set)
