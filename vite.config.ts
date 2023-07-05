import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Use React plugin in all *.jsx and *.tsx files
    include: '**/*.{jsx,tsx}' ,
  }), viteTsconfigPaths(), svgrPlugin()],
});