<script lang="ts">
    import { getContext } from 'svelte'
    import type { SiteContext } from '$lib/types'


    const { site, section } = getContext<SiteContext>('site')
</script>

<svelte:head>
    <title>{$site} - {$section}</title>
</svelte:head>

<main>
    
</main>

<style lang="scss">
    
</style>