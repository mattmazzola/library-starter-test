import DummyClass, { OtherDummyClass } from '../src/library-starter-test'

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

describe('Other Dummy test', () => {
  it('OtherDummyClass is instantiable', () => {
    expect(new OtherDummyClass()).toBeInstanceOf(OtherDummyClass)
  })
})
