import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Add base path if deploying to a subdirectory
  // base: '/subdirectory/',
});
