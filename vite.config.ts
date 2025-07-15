import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ⬅️ nécessaire pour gérer les chemins

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ⬅️ ajoute l'alias @ vers /src
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
