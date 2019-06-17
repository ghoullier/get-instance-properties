import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import ts from "rollup-plugin-typescript";
import typescript from "typescript";
import { terser } from "rollup-plugin-terser";

const env = process.env.NODE_ENV;
const config = {
  plugins: [
    resolve({
      mainFields: ["jsnext", "main", "module"]
    }),
    commonjs({
      include: ["node_modules/**"]
    }),
    ts({
      typescript
    })
  ],
  output: {
    format: "cjs",
    sourcemap: true
  }
};

if (env === "production") {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  );
}

export default config;
