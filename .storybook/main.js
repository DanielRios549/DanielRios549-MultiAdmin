const path = require('path')
const preprocess = require('svelte-preprocess')
const svg = require('@poppanator/sveltekit-svg')

module.exports = {
    stories: [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-svelte-csf",
        '@storybook/addon-a11y',
        'storybook-dark-mode'
    ],
    framework: "@storybook/svelte",
    core: {
        builder: "storybook-builder-vite"
    },
    svelteOptions: {
        // Fix cannot import svelte.config.js file
        preprocess: preprocess({
            typescript: true
        })
    },
    async viteFinal(config, { configType }) {
        return {
            ...config,
            plugins: [...config.plugins, svg()],
            resolve: {
                alias: {
                    '$stores': path.resolve('./src/stores'),
                    '$components': path.resolve('./src/components'),
                    '$parts': path.resolve('./src/parts'),
                    '$icons': path.resolve('./src/icons'),
                    '$styles': path.resolve('./styles'),
                    '$lib': path.resolve('./src/lib'),
                    '$app': path.resolve('./node_modules/@sveltejs/kit/assets/runtime/app')
                }
            }
        }
    },
}