import DummyClass, * as Dummies from '../src/library-starter-test'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })
})

/**
 * Add comment
 */
describe('Other Dummy tests', () => {
  it('OtherDummyClass is instantiable', () => {
    expect(new Dummies.OtherDummyClass()).toBeInstanceOf(
      Dummies.OtherDummyClass
    )
  })

  it('OtherDummyClass is instantiable', () => {
    expect(new Dummies.ThirdDummyClass()).toBeInstanceOf(
      Dummies.ThirdDummyClass
    )
  })

  it('OtherDummyClass is instantiable', () => {
    expect(new Dummies.FourthDummyClass()).toBeInstanceOf(
      Dummies.FourthDummyClass
    )
  })
})
