import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'images', replacement: path.resolve(__dirname, 'src/assets/images') },
      { find: 'util', replacement: path.resolve(__dirname, 'src/util') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'public', replacement: path.resolve(__dirname, 'public') },
    ],
  },
});