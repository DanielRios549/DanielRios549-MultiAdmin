import { writable, get } from 'svelte/store'

export const themes = ['light', 'dark', 'dracula']
export const theme = writable(localStorage.getItem('theme') || themes[0])

document.body.classList.add(get(theme))

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