import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		sourceMap: true
	}),
	kit: {
		target: '#app',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			resolve: {
				alias: {
					'$stores': path.resolve('./src/stores'),
					'$parts': path.resolve('./src/parts')
				}
			}
		}
	},
}

export default config
