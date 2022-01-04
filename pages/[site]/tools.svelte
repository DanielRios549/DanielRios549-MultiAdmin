<script lang="ts">
    import { getContext } from 'svelte'
    import type { SiteContext } from '$lib/types'


    const { section } = getContext<SiteContext>('site')
</script>

<h1>{$section}</h1>