interface NameMap {
  [index: string]: string
}

export default class Glum {
  size: number
  values: Array<Symbol>
  nameMap: NameMap

  constructor (...enumNames: Array<string | Function>)

  constructor () {
    if (arguments.length === 0) {
      throw Error('Must provide at least one argument')
    }
    this.size = arguments.length
    this.values = []
    this.nameMap = {}

    var subtract = 0
    var SymbolMaker: Function = Symbol
    if (!Symbol || typeof Symbol !== 'function') {
      console.log("Symbol doesn't exist")
      if (typeof arguments[arguments.length - 1] === 'function') {
        SymbolMaker = arguments[arguments.length - 1]
        subtract = 1
      } else {
        throw Error("This env doesn't support Symbol. You must provide a polyfill")
      }
    }

    for (var i = 0; i < arguments.length - subtract; i++) {
      var name = arguments[i]
      if (typeof name !== 'string') {
        throw Error('Enum names must be strings')
      }
      var sym = SymbolMaker(name)

      Object.defineProperty(this, name, {
        enumerable: true,
        writable: false,
        configurable: false,
        value: sym
      })

      this.values.push(this[name])

      this.nameMap[(sym as unknown) as string] = name
    }
    Object.freeze(this)
  }

  getName (sym: Symbol): string {
    if (!this.nameMap[(sym as unknown) as string]) {
      throw Error("Enum doesn't contain that member")
    }
    return this.nameMap[(sym as unknown) as string]
  }

  has (key: Symbol): boolean {
    // coerce the value to a boolean
    return !!this.nameMap[(key as unknown) as string]
  }

  // because we're going to be accessing Enum members

  [index: string]: any
}
