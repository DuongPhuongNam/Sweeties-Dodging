import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
 
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // ✅ FIX: Chỉ dùng base path cho production
  base: process.env.NODE_ENV === 'production' 
    ? (process.env.VITE_BASE_PATH || "/Sweeties-Dodging")
    : "/",
});
