<script lang="ts">
	import Header from '$parts/header.svelte'
	import Footer from '$parts/footer.svelte'
	import Sites from '$parts/sites.svelte'
</script>

<Header />
<Sites />
<main>
	<slot />
</main>

<Footer />

<style lang="scss" global>
	@use "../styles/app.scss";
</style>
