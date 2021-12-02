<script lang="ts">
	export let title: string
	export let info: string
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<h1>{title}</h1>
	<p>{info}</p>
</main>

<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit'

	export const load: ErrorLoad = (context) => {
		return {
			props: {
				title: `${context.error.name} ${context.status}`,
				info: context.error.message,
			}
		}
	}
</script>

<style lang="scss">
	main {
		padding-top: 80px;
	}
</style>
