<script context="module">
    export async function load({page}) {
		const name = page.params.name

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