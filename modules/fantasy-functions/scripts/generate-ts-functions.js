import definitions from '../lib/definitions.js'
import { createGenerics } from './utils.js'

const parameterNames = 'abc'
const functionParameterNames = 'fgh'

const fnTypeRegex = /=>/
const typeRegex = /<.*>/

function* generateParameterName () {
  let i = 0
  while (true) {
    yield parameterNames[i++]
  }
}

function* generateFunctionParameterName () {
  let i = 0
  while (true) {
    yield functionParameterNames[i++]
  }
}

function modArg (d, arg) {
  const { name } = d
  return arg
    .replace(/\bT\b/, `T extends ${name}<infer V> ? V : never`)
    .replace('_sameType', name)
    .replace('_any', 'any')
}

function* generateParameterNames (d) {
  const { args } = d
  const paramGenerator = generateParameterName()
  const fnParamGenerator = generateFunctionParameterName()
  let count = 0
  while (count < args.length) {
    const item = args[count++]
    const isFunctionParam = fnTypeRegex.test(item)
    const isTypeParam = typeRegex.test(item)
    const paramName = isFunctionParam && !isTypeParam
      ? fnParamGenerator.next().value
      : paramGenerator.next().value
    yield paramName
  }
}

function generateParameters (d) {
  const { args, name, isStatic = false } = d
  const paramGenerator = generateParameterNames(d)
  const argsWithNames = args.map((item) => {
    const paramName = paramGenerator.next().value
    return `${paramName}: ${modArg(d, item)}`
  })

  if (isStatic) {
    argsWithNames.unshift(`${name.toLowerCase()}: T`)
  } else {
    argsWithNames.push(`${name.toLowerCase()}: T`)
  }

  return argsWithNames.join(', ')
}

const genericxRegexp = /\b[A-Z]\b/g

function getAny () {
  return 'any'
}

function createBody (functionName, d) {
  const { name, args } = d
  const paramGenerator = generateParameterNames(d)
  const params = args.map(() => paramGenerator.next().value).join(', ')
  return `return ${name.toLowerCase()}[${functionName.toUpperCase()}](${params})`
}

function hmm (d) {
  const { generics, name, returnType } = d
  const mainType = `T extends ${name}${createGenerics(generics.map(getAny))}`

  const returnGenerics = returnType.match(genericxRegexp) || []
  const allGenerics = [ mainType, ...returnGenerics ]

  return createGenerics(allGenerics)
}

function create (functionName, d) {
  const { name, returnType } = d

  const actualReturnType = returnType.startsWith(name)
    ? "CallHKT<T['hkt'], U>"
    : returnType

  return `export function ${functionName} ${hmm(d)} (${generateParameters(d)}): ${actualReturnType} {
  ${createBody(functionName, d)}
}
  `
}

Object.entries(definitions)
  // .filter(([ fn ]) => fn === 'ap')
  .forEach(([ functionName, definition ]) => {
    process.stdout.write(create(functionName, definition))
    process.stdout.write('\n\n')
  })
