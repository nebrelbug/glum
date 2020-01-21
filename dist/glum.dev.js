(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Glum = factory());
}(this, (function () { 'use strict';

  var Glum = /** @class */ (function () {
      function Glum() {
          if (arguments.length === 0) {
              throw Error('Must provide at least one argument');
          }
          this.size = arguments.length;
          this.values = [];
          this.nameMap = {};
          for (var i = 0; i < arguments.length; i++) {
              var name = arguments[i];
              if (typeof name !== 'string') {
                  throw Error('Enum names must be strings');
              }
              var sym = Symbol('name');
              Object.defineProperty(this, name, {
                  enumerable: true,
                  writable: false,
                  configurable: false,
                  value: sym
              });
              this.values.push(this[name]);
              this.nameMap[sym] = name;
          }
          Object.freeze(this);
      }
      Glum.prototype.getName = function (sym) {
          if (typeof sym !== 'symbol') {
              throw Error('Argument must be a symbol');
          }
          return this.nameMap[sym];
      };
      return Glum;
  }());

  return Glum;

})));
//# sourceMappingURL=glum.dev.js.map
