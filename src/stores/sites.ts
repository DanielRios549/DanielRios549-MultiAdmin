import { writable } from 'svelte/store'
import type { Site } from '$lib/types'

const defaultSites: Site[] =  [
    {'name': 'Reakut'},
    {'name': 'Second'}
]

export const sites = writable(defaultSites)
