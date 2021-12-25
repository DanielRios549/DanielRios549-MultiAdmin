import { browser } from '$app/env'
import { page } from '$app/stores'
import { writable, get } from 'svelte/store'
import type { Site } from '$lib/types'
import Dashboard from '$icons/dashboard.svg'
import Posts from '$icons/posts.svg'
import Pages from '$icons/pages.svg'
import Users from '$icons/users.svg'
import Tools from '$icons/tools.svg'
import Settings from '$icons/settings.svg'

export const network: Site = {
    'name': 'network',
    'displayName': 'Network',
    'link': '/network',
    'options': ['Dashboard', 'Users', 'Settings'],
    'todo': ['Option 1', 'Option 2', 'Option 3', 'Option 4']
}

const defaultSites: Site[] =  [
    {
        'name': 'reakut',
        'displayName': 'Reakut',
        'link': '/reakut',
        'options': ['Dashboard', 'Posts', 'Pages', 'Users', 'Tools', 'Settings'],
        'todo': ['Morning Task', 'Afternoon task', 'Evening Task']
    },
    {
        'name': 'second',
        'displayName': 'Second',
        'link': '/second',
        'options': ['Dashboard', 'Pages', 'Users', 'Tools', 'Settings'],
        'todo': ['Send Email', 'Verify User', 'Check Prices']
    }
]

export const icons = {'dashboard': Dashboard, 'users': Users, 'pages': Pages, 'settings': Settings, 'tools': Tools, 'posts': Posts}

export const sites = writable(browser && JSON.parse(localStorage.getItem('sites')) as Site[] || defaultSites)

export const info = () => {
    const site = get(page).path.split('/')[1].charAt(0).toUpperCase() + get(page).path.split('/')[1].slice(1)
    const section = get(page).path.split('/')[2].charAt(0).toUpperCase() + get(page).path.split('/')[2].slice(1)

    return [site, section]
}
