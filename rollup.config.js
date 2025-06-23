import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.mjs',
    format: 'esm',
    sourcemap: false,
  },
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs(),
    json(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  external: [
    'node:fs',
    'node:path',
    'node:os',
    'node:util',
    'node:stream',
    'node:process',
    'node:url',
  ],
};
