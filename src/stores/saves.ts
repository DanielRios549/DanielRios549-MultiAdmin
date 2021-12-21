import { browser } from '$app/env'

export let keys = {menu: 'menuOpened'}
export let saves = {}

for (const [key, value] of Object.entries(keys)) {
    saves[value] = JSON.parse(browser && localStorage.getItem(value)) || false
}
