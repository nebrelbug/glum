export default class Glum {
  size: number
  values: Array<Symbol>
  nameMap: { [index: string]: string };
  [index: string]: any
  constructor (...enumNames: string[])

  constructor () {
    if (arguments.length === 0) {
      throw Error('Must provide at least one argument')
    }
    this.size = arguments.length
    this.values = []
    this.nameMap = {}

    for (var i = 0; i < arguments.length; i++) {
      var name = arguments[i]
      if (typeof name !== 'string') {
        throw Error('Enum names must be strings')
      }
      var sym = Symbol('name')

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
    if (typeof sym !== 'symbol') {
      throw Error('Argument must be a symbol')
    }
    return this.nameMap[(sym as unknown) as string]
  }
}
