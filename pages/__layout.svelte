<script lang="ts">
	import { page } from '$app/stores'
	import Sites from '$parts/sites.svelte'
	import Header from '$parts/header.svelte'
	import Footer from '$parts/footer.svelte'

	$: path = $page.path

	const noAuthPages = ['/', '/login']
</script>

{#if !noAuthPages.includes(path)}
	<Header />
	<Sites />
{/if}

<main class:out={noAuthPages.includes(path)}>
	<slot />
</main>

<Footer />

<style lang="scss" global>
	@use "../styles/app.scss";
</style>
