import type { Writable } from 'svelte/store'


export type List = string[] | object[]

export type Site = {
    name: string
    displayName: string
    link: string
    options: List
}

export type SiteContext = {
    site: Writable<string>
    section: Writable<string>
    todo: Writable<List>
}