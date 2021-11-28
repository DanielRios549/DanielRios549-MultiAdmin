import { writable } from 'svelte/store'
import type { Site } from '$lib/types'
import { browser } from '$app/env'

export const network: Site = {
    'name':'Network',
    'link': '/network',
    'options': ['Dashboard', 'Users', 'Settings']
}

const defaultSites: Site[] =  [
    {
        'name':'Reakut',
        'link': '/reakut',
        'options': ['Dashboard', 'Posts', 'Pages', 'Users', 'Tools', 'Settings']
    },
    {
        'name': 'Second',
        'link': '/second',
        'options': ['Dashboard', 'Pages', 'Users', 'Tools', 'Settings']
    }
]

export const sites = writable(browser && JSON.parse(localStorage.getItem('sites')) as Site[] || defaultSites)
