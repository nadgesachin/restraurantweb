import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Port for the development server
    host: '0.0.0.0', // Listen on all network interfaces
  },
  preview: {
    port: 3001, // Port for the preview server
    host: '0.0.0.0', // Listen on all network interfaces
  },
});
