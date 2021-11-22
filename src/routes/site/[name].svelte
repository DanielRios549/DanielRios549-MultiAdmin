<script context="module" lang="ts">
    export async function load(context) {
		const name = context.page.params.name

		return {
			props: {
				title: name
			}
		}
    }
</script>

<script lang="ts">
	export let title: string
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>