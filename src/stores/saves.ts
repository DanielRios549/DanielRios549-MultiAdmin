import { browser } from '$app/env'

export const keys = { menu: 'menuOpened' }
export const saves = {}

for (const value of Object.values(keys)) {
    saves[value] = JSON.parse(browser && localStorage.getItem(value)) || false
}
