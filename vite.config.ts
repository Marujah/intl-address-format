import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'IntlAddressFormat',
      fileName: (format) => `intl-address-format.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});