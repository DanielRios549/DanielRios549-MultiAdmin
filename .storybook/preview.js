import { themes } from '@storybook/theming'

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    darkMode: {
        stylePreview: true,
        dark: { ...themes.dark, appBg: '#202225', appContentBg: '#27282b' },
        light: { ...themes.normal, appBg: '#f6f6f6', appContentBg: '#d6d6d6' },
    }
}