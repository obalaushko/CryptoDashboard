import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
	plugins: [
		react(),
		svgr({
			include: '**/*.svg?react',
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@config': path.resolve(__dirname, './src/config'),
			'@context': path.resolve(__dirname, './src/context'),
			'@graphql': path.resolve(__dirname, './src/graphql'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@router': path.resolve(__dirname, './src/router'),
			'@stores': path.resolve(__dirname, './src/stores'),
			'@style': path.resolve(__dirname, './src/style'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	server: {
		port: 3333,
	},
});
