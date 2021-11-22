import { writable, get } from 'svelte/store'
import { browser } from '$app/env'

export const themes = ['light', 'dark']
export const theme = writable(browser && localStorage.getItem('theme') || themes[0])

browser && document.body.classList.add(get(theme))

export const handleTheme = () => {
    let index = themes.indexOf(get(theme))
    let newTheme = 'none'

    if (index + 1 === themes.length) {
        newTheme = themes[0]
    }
    else {
        newTheme = themes[index + 1]
    }

    document.body.classList.replace(get(theme), newTheme)
    localStorage.setItem('theme', newTheme)
    theme.set(newTheme)
}

export const ssr = false