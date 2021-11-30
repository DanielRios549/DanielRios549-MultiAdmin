<script lang="ts">
    import Dark from '$icons/dark.svg'

    export let title = 'Card Title'
</script>

<article class="card">
    <header>
        <h3>{title}</h3>
    </header>
    <section class="content">
        <span>Card</span>
        <Dark />
    </section>
</article>

<style lang="scss">
    @use "../../styles/components/card.scss";
</style>