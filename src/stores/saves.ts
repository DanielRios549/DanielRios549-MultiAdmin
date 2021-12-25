import { browser } from '$app/env'

export let keys = {menu: 'menuOpened'}
export let saves = {}

for (const value of Object.values(keys)) {
    saves[value] = JSON.parse(browser && localStorage.getItem(value)) || false
}
