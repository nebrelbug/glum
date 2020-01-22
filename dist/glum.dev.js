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
          var subtract = 0;
          var SymbolMaker = Symbol;
          // tslint:disable-next-line:strict-type-predicates
          if (!Symbol || typeof Symbol !== 'function') {
              console.log("Symbol doesn't exist");
              if (typeof arguments[arguments.length - 1] === 'function') {
                  SymbolMaker = arguments[arguments.length - 1];
                  subtract = 1;
              }
              else {
                  throw Error("This env doesn't support Symbol. You must provide a polyfill");
              }
          }
          for (var i = 0; i < arguments.length - subtract; i++) {
              var name = arguments[i];
              if (typeof name !== 'string') {
                  throw Error('Enum names must be strings');
              }
              var sym = SymbolMaker(name);
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
          if (!this.nameMap[sym]) {
              throw Error("Enum doesn't contain that member");
          }
          return this.nameMap[sym];
      };
      Glum.prototype.has = function (key) {
          // coerce the value to a boolean
          return !!this.nameMap[key];
      };
      return Glum;
  }());

  return Glum;

})));
//# sourceMappingURL=glum.dev.js.map
