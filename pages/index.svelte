<script lang="ts">
	import { browser } from '$app/env'
	import { network, sites } from '$stores/sites'

	
	const title: string = 'Home'
	const list = browser && document.querySelector<HTMLElement>('#sites')

	$: menuLeft = browser && parseInt(list.style.left)
	$: menuWidth = browser && list.scrollWidth

	const rollBack = () => {
		if (menuLeft < 0) {
			list.style.left = `${menuLeft + 300}px`
		}
	}
	const rollNext = () => {
		if (Math.abs(menuLeft) <= menuWidth - 900) {
			list.style.left = `${menuLeft - 300}px`
		}
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<aside>
	<p class="info">Choose a site to manage.</p>
	<button>Avaiable Sites</button>
</aside>
<main>
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
</main>

<style lang="scss">
	@use "../styles/pages/index.scss";
</style>