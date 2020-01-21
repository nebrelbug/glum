import Enum from '../src'
let x = new Enum('HEY', 'HI', 'HALLO')
console.log(x.values.length)

describe('Creation', () => {
  it('Simple create works', () => {
    expect(new Enum('HEY', 'HI', 'HALLO')).toBeTruthy()
  })

  it('All values exist', () => {
    let x = new Enum('HEY', 'HI', 'HALLO')
    console.log(x.values)
    expect(x.HEY).toBeTruthy()
    expect(x.HI).toBeTruthy()
    expect(x.HALLO).toBeTruthy()
  })
})

describe('Methods', () => {
  it('Size is right', () => {
    let x = new Enum('HEY', 'HI', 'HALLO')

    expect(x.size).toEqual(3)
  })

  it('Values are right', () => {
    let x = new Enum('HEY', 'HI', 'HALLO')

    expect(x.values.length).toEqual(3)
    expect(x.values).toEqual([x.HEY, x.HI, x.HALLO])
  })

  it('getName is right', () => {
    let x = new Enum('HEY', 'HI', 'HALLO')

    expect(x.getName(x.HI)).toEqual('HI')
  })
})

describe('Things error when they should', () => {
  it('0 arguments', () => {
    expect(function () {
      let x = new Enum()
    }).toThrow()
  })

  it('Non-string value', () => {
    expect(function () {
      let x = new Enum('HEY', 'HI', (2 as unknown) as string)
    }).toThrow()
  })

  it('getName is not a Symbol', () => {
    expect(function () {
      let x = new Enum('HEY', 'HI', 'HALLO')
      x.getName((3 as unknown) as Symbol)
    }).toThrow()
  })

  it('Trying to add new properties', () => {
    expect(function () {
      let x = new Enum('HEY', 'HI', 'HALLO')
      x.YOYO = 'HIEG'
      x.HEY = 3
    }).toThrow()
  })
})
