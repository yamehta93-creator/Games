import { defineConfig } from 'vite';
export default defineConfig({ base: './', build: { rollupOptions: { input: { adventure: 'index.html', arcade: 'arcade.html' } } } });
