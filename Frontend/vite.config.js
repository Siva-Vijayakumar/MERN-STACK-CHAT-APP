import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';  // Correct Tailwind CSS plugin

export default defineConfig({
  plugins: [
    react(), // ✅ React plugin is necessary
  ],
  build: {
    outDir: 'dist', // Ensure this matches your expected build directory
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
