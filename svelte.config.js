import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import AutoPrefixer from 'autoprefixer'
import svg from '@poppanator/sveltekit-svg'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess({
        postcss: {
            plugins: [AutoPrefixer()]
        }
    }),
    kit: {
        target: '#app',
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        files: {
            routes: 'pages'
        },
        vite: {
            plugins: [svg()],
            optimizeDeps: {
                exclude: ['svelte-kit-cookie-session'],
            },
            resolve: {
                alias: {
                    '$stores': path.resolve('./src/stores'),
                    '$components': path.resolve('./src/components'),
                    '$parts': path.resolve('./src/parts'),
                    '$icons': path.resolve('./src/icons')
                }
            }
        }
    },
}

export default config
