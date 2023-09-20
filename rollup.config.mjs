// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';  // Import the plugin

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
  ],
  external: [
    'react',
    'react-dom',
    // Add other libraries you want to exclude from the bundle here
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    postcss({
      inject: true,  // Injects the styles directly into the JavaScript
    }),
  ],
};
