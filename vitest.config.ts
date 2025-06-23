import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // per usare describe/test/expect senza importare
    environment: 'node', // o 'jsdom' se testi roba DOM
  },
});
