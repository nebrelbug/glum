import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

// TODO: Someday don't transpile ES6 module dist files to ES5, ex. removing classes

export default [
  {
    input: 'src/index.ts', // todo: use rollup-plugin-replace
    output: [
      {
        file: 'dist/glum.dev.js',
        format: 'umd',
        name: 'Glum',
        sourcemap: true
      },
      {
        file: 'dist/glum.min.js',
        format: 'umd',
        name: 'Glum',
        sourcemap: true,
        plugins: [terser()]
      }
    ],
    plugins: [typescript({ useTsconfigDeclarationDir: true }), commonjs(), resolve()],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    watch: {
      include: 'src/**'
    }
  }
]
