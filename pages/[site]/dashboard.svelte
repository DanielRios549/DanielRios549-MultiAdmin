<script lang="ts">
    import Card from '$components/card.svelte'
    import Todo from '$components/todo.svelte'
</script>

<section id="cards">
    <Card/>
    <Card/>
    <Card/>
</section>
<Todo/>

<style lang="scss">
    #cards {
        display: flex;
        gap: 10px;
    }
</style>