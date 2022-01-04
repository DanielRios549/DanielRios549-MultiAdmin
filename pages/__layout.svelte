<script lang="ts">
    import { onMount } from 'svelte'
    import { page } from '$app/stores'
    import { check } from '$stores/auth'
    import { theme } from '$stores/theme'
    import Sites from '$parts/sites.svelte'
    import Header from '$parts/header.svelte'
    import Footer from '$parts/footer.svelte'

    $: path = $page.path
    let ready: boolean

    onMount(async () => {
        await check()

        document.body.classList.add($theme)
        ready = true
    })

    const noAuthPages = ['/', '/login']
</script>

{#if ready === true}
    <Header/>
    <slot/>

    {#if !noAuthPages.includes(path)}
        <Sites/>
    {/if}

    <Footer/>
{/if}

<style lang="scss" global>
    @use "../styles/app.scss";
</style>
