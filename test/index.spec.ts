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

  it('Enum.has works', () => {
    let x = new Enum('HEY', 'HI', 'HALLO')

    expect(x.has(x.HEY)).toEqual(true)
    expect(x.has(x.HOLA)).toEqual(false)
  })

  it('Symbol polyfill works', () => {
    let SymbolPolyfill = function (strn: string) {
      return '@@_Symbol:' + strn
    }

    let oldSymbol = Symbol

    Object.defineProperty(global, 'Symbol', { value: undefined, configurable: true })

    let x = new Enum('HEY', 'HI', 'HALLO', SymbolPolyfill)

    expect(x.HEY).toEqual('@@_Symbol:HEY')

    console.log(x.HEY)

    Object.defineProperty(global, 'Symbol', {
      value: oldSymbol,
      configurable: true,
      writable: true
    })
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

  it('No Symbol support w/out polyfill', () => {
    expect(function () {
      Object.defineProperty(global, 'Symbol', { value: undefined, configurable: true })
      console.log(Symbol)
      let x = new Enum('HEY', 'HI', 'HALLO')
      console.log(x.HEY)

      // Object.defineProperty(global, 'Symbol', { value: oldSymbol, configurable: true })
    }).toThrow()
  })
})
