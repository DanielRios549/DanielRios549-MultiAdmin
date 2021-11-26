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

<script lang="ts">
	export let title: string
	export let info: string
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h2>{title}</h2>
<p>{info}</p>
