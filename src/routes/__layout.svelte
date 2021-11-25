<script lang="ts">
	import Header from '$parts/header.svelte'
	import Footer from '$parts/footer.svelte'
	import Menu from '$parts/menu.svelte'
</script>

<Header />
<Menu />
<main>
	<slot />
</main>

<Footer />

<style lang="scss" global>
	@use "../../styles/app.scss";
</style>
