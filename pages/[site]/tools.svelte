<script lang="ts">
    import { info } from '$stores/sites'

    $: site = info()[0]
    $: section = info()[1]
</script>

<svelte:head>
    <title>{site} - {section}</title>
</svelte:head>

<main>
    
</main>

<style lang="scss">
    
</style>