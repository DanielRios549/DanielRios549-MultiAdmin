<script lang="ts">
    import { sites } from '$stores/sites'
</script>

<section id="panel">
    <nav id="sites">
        <ul>
            <li><a href="/">Network</a></li>
            {#each $sites as site}
                <li>
                    <a href={`/site/${site.name.toLowerCase()}`}>{
                        site.name
                    }</a>
                </li>
            {/each}
        </ul>
    </nav>
</section>

<style lang="scss">
    @use '../styles/parts/menu.scss';
</style>