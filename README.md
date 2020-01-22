# glum

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/com/nebrelbug/glum/master.svg)](https://travis-ci.com/nebrelbug/glum)
[![Coveralls](https://img.shields.io/coveralls/nebrelbug/glum.svg)](https://coveralls.io/github/nebrelbug/glum)
[![Dev Dependencies](https://img.shields.io/david/dev/nebrelbug/glum)](https://david-dm.org/nebrelbug/glum?type=dev)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/bengubler)

**Summary**

glum is a super lightweight Enum library that makes use of Symbols to achieve type-safety.

_What if my environment doesn't support ES6?_

If you're in a browser, use a polyfill.
If you're running in Node, chances are that Symbols are supported: they're supported in all versions after 5.12.0.

### 🌟 Features

- Type-safety. When you declare an Enum, members are unique and can't be mimicked by strings, numbers, etc.

## :scroll: Docs

### Installation

```
npm install glum
```

Or, if in a browser,

```
<script crossorigin src="https://cdn.jsdelivr.net/npm/glum"></script>
```

[Note: this will create a global variable called Glum]

### Usage

We distribute a UMD build, so you can use it with ES modules, CommonJS, AMD, or in the browser

```js
import Enum from 'glum'
// or var Enum = require 'glum'

let FRUIT = new Enum('APPLE', 'ORANGE', 'PEAR')

function nameFruit (fruit) {
  if ((fruit = FRUIT.APPLE)) {
    console.log("It's an apple")
  }
}

console.log(FRUIT.getName(FRUIT.APPLE)) // APPLE
```

## :heavy_check_mark: Tests

Tests can be run with `npm test`. Multiple tests check that things return expected results, formatting follows guidelines, and code coverage is at the expected level.

## Projects using `glum`

Create an issue to add yours!

## Credits

Made with :heart: by [@nebrelbug](https://github.com/nebrelbug) and all these wonderful contributors ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!
