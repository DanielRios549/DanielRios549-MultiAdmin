<script lang="ts">
	import { network, sites } from '$stores/sites'
	import { clickPrev, clickNext } from  '$lib/clickScroll'

	const title: string = 'Home'

	$: auth = false

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
	<button use:clickPrev={'#sites'} id="back">{'<'}</button>
	<button use:clickNext={'#sites'} id="next">{'>'}</button>
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