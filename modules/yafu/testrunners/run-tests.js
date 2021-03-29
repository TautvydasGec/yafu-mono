const chai = require('chai')

chai.should()

const fs = require('fs')

const testFolder = fs.readdirSync('./test')
const ignoreFiles = [ '__tests-setup.js', 'mocha.opts' ]
const testFiles = testFolder.filter((f) => ignoreFiles.indexOf(f) === -1)

function shouldBeCurried (name, fn) {
  return name !== 'curry' && typeof fn === 'function'
}

export default function runTests (getTestSubject, testCurry = false) {
  return () => {
    testFiles.forEach((f) => {
      const name = f.split('.')[0]
      const test = require(`../test/${f}`)
      const fn = getTestSubject(name)
      describe(name, () => {
        if (testCurry && shouldBeCurried(name, fn)) {
          it('is curried', () => {
            fn().should.equal(fn())
            fn.should.equal(fn())
          })
        }
        test(fn)()
      })
    })
  }
}
