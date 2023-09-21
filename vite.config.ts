import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({ insertTypesEntry: true }),
  ],
  esbuild:{minifyIdentifiers:true,minifySyntax:true,minifyWhitespace:true},
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "radts-core",
      formats: ["cjs", "es"],
      name: "radts-core",
    },
    emptyOutDir: true,
    outDir: "dist",
    minify: true,
    sourcemap: true,
  },
});

