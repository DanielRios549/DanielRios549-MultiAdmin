import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import AutoPrefixer from 'autoprefixer'
import PresetEnv from 'postcss-preset-env'
import svg from '@poppanator/sveltekit-svg'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
export default {
    preprocess: sveltePreprocess({
        postcss: {
            plugins: [
                AutoPrefixer(),
                PresetEnv({
                    stage: 1
                })
            ]
        }
    }),
    kit: {
        target: '#app',
        adapter: adapter({
            pages: 'build/pages',
            assets: 'build/files'
        }),
        files: {
            routes: 'pages'
        },
        vite: {
            plugins: [svg()],
            optimizeDeps: {
                exclude: ['svelte-kit-cookie-session']
            },
            resolve: {
                alias: {
                    $stores: path.resolve('./src/stores'),
                    $components: path.resolve('./src/components'),
                    $parts: path.resolve('./src/parts'),
                    $icons: path.resolve('./src/icons')
                }
            }
        }
    }
}
