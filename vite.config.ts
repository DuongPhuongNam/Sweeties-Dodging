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
    target: 'esnext',
    minify: 'esbuild',
    // Simplified rollup options để tránh lỗi native binaries
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Thêm format để đảm bảo compatibility
        format: 'es',
      },
    },
    // Thêm chunkSizeWarningLimit để tránh warnings
    chunkSizeWarningLimit: 1600,
  },
  esbuild: {
    target: 'esnext',
    // Thêm config cho better compatibility
    supported: {
      'top-level-await': true
    }
  }, 
  optimizeDeps: {
    include: ['react', 'react-dom'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  // Đơn giản hóa base config
  base: process.env.NODE_ENV === 'production' 
    ? "/Sweeties-Dodging/"  // Cố định base path
    : "/",
}); 