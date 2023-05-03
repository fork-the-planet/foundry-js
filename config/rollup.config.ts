import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

export default defineConfig({
  // https://github.com/rollup/rollup/issues/1828
  watch: {
    chokidar: {
      usePolling: true,
    },
  },
  input: ['src/index.ts'],
  output: {
    dir: 'dist',
    sourcemap: true,
  },
  plugins: [nodeResolve(), typescript()],
});
