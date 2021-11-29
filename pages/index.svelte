<script lang="ts">
	import { browser } from '$app/env'
	import { network, sites } from '$stores/sites'

	const title: string = 'Home'

	$: auth = false
	$: menuLeft = (item: HTMLElement): number => browser && parseInt(item.style.left)
	$: menuWidth = (item: HTMLElement): number => browser && item.scrollWidth

	const getList = () => {
		return browser && document.querySelector<HTMLElement>('#sites')
	}

	const rollBack = () => {
		const list = getList()

		if (menuLeft(list) < 0) {
			list.style.left = `${menuLeft(list) + 300}px`
		}
	}
	const rollNext = () => {
		const list = getList()

		if (Math.abs(menuLeft(list)) <= menuWidth(list) - 900) {
			list.style.left = `${menuLeft(list) - 300}px`
		}
	}
	const hangleLogin = (event: any) => {
		event.preventDefault()
		auth = true
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<aside>
	{#if !auth}
	<p class="info">Enter with your account</p>
	<form on:submit={hangleLogin}>
		<input type="text" name="user" id="user">
		<button type="submit">Enter</button>
	</form>
	{:else}
	<p class="info">Choose a site to manage.</p>
	<button>Avaiable Sites</button>
	{/if}
</aside>
<main>
	{#if auth}
	<button id="back" on:click={rollBack}>{'<'}</button>
	<button id="next" on:click={rollNext}>{'>'}</button>
	<nav>
		<menu id="sites" style="left: 0">
			<li>
				<a href={`${network.link}/dashboard`}>
					<img src="" alt="">
					<span>{network.name}</span>
				</a>
			</li>
			{#each $sites as site}
				<li>
					<a href={`${site.link}/dashboard`}>
						<img src="" alt="">
						<span>{site.name}</span>
					</a>
				</li>
			{/each}
		</menu>
	</nav>
	{/if}
</main>

<style lang="scss">
	@use "../styles/pages/index.scss";
</style>