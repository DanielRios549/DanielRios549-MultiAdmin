<script lang="ts">
    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'
    import { page } from '$app/stores'
    import { network, sites } from '$stores/sites'
    import { tasks } from '$stores/todo'
    import type { SiteContext } from '$lib/types'

    const allSites = { network }
    $sites.map((site) => allSites[site.name] = site)

    let site = writable('')
    let section = writable('')
    let list = writable([''])

    $: $site = allSites[$page.path.split('/')[1]].displayName
    $: $section = $page.path.split('/')[2].charAt(0).toUpperCase() + $page.path.split('/')[2].slice(1)
    $: $list = $tasks[$site.toLowerCase()]

    setContext<SiteContext>('site', { site, section, list })
</script>

<slot/>