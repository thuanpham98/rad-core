import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({ insertTypesEntry: true }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "rad-core",
      formats: ["cjs", "es"],
      name: "rad-core",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    emptyOutDir: true,
    outDir: "dist",
    minify: true,
    cssMinify: false,
    sourcemap: true,
    cssCodeSplit: false,
  },
});

