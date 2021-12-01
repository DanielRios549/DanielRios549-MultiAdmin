<script lang="ts">
	import { page } from '$app/stores'
	import Card from '$components/card.svelte'

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
	<article id="banner">
		<header>
			<h1>{site} - {section}</h1>
			<img src={`/sites/banner/${site.toLocaleLowerCase()}.jpg`} alt="NetworkBanner" height={300}/>
		</header>
	</article>
	<article class="cards">
		<Card />
		<Card />
		<Card />
	</article>
</main>

<style lang="scss">
	:global(#header) {
		background-color: transparent !important;
	}
	main {
		height: calc(100vh - 100px);
		grid-row: header/main !important;
		color: var(--text);
		padding: 0 0 20px 20px;
		height: 100%;

		#banner {
			position: relative;
			left: -20px;
			width: calc(100% + 20px);
			margin-bottom: 20px;

			header {
				display: grid;
				grid-template-columns: 1fr;
				grid-template-rows: 1fr 50px;
				
				h1 {
					background-color: rgba(0, 0, 0, .6);    
					grid-column: 1/2;
					grid-row: 2;
					display: flex;
					align-items: center;
					text-indent: 20px;
					z-index: 98;
				}
				img {
					object-fit: cover;
					width: 100%;
					grid-column: 1/2;
					grid-row: 1/3;
					z-index: 97;
				}
			}
		}
		.cards {
			display: flex;
			gap: 10px;
		}
	}
</style>