<script lang="ts">
	import { page } from '$app/stores'

	let site: string
	let section: string

	$: {
		site = $page.path.split('/')[1].charAt(0).toUpperCase() + $page.path.split('/')[1].slice(1)
		section = $page.path.split('/')[2].charAt(0).toUpperCase() + $page.path.split('/')[2].slice(1)
	}
</script>

<svelte:head>
	<title>{site} - {section}</title>
</svelte:head>

<main>
	<h1>{site} - {section}</h1>
</main>