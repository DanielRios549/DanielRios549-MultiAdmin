<script lang="ts">
    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'
    import { page } from '$app/stores'
    import { toggleClass } from '$lib/scrollChange'
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

<svelte:head>
    <title>{$site} - {$section}</title>
</svelte:head>

<main use:toggleClass={{ scroll: 250, class: 'fixed', item: '#header' }}>
    <section id="banner">
        <header>
            <h1>{$site} - {$section}</h1>
            <img src="/sites/banner/{$site.toLowerCase()}.jpg" alt="NetworkBanner" height={300}/>
        </header>
    </section>
    <slot/>
</main>

<style lang="scss">
    main {
        color: var(--text);
        padding: 0 0 20px 20px;

        #banner {
            position: relative;
            left: -20px;
            width: calc(100% + 20px);

            header {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 50px;
                
                h1 {
                    background-color: rgba(0, 0, 0, .6);
                    backdrop-filter: blur(5px);
                    grid-column: 1/2;
                    grid-row: 2;
                    display: flex;
                    align-items: center;
                    text-indent: 20px;
                    z-index: 98;
                    color: #D6D6D6;
                }
                img {
                    object-fit: cover;
                    width: 100%;
                    grid-column: 1/2;
                    grid-row: 1/3;
                    z-index: 97;
                }
            }
        }
    }
</style>