<script lang="ts">
    import { page } from "$app/stores";
    import { network, sites } from "$stores/sites";

    let options: string[] = []

    $: {
        const path = $page.path
        const site = path.split('/')[1]

        if (site == 'network') {
            options = network.options
        }
        else {
            options = $sites.find(item => item.name.toLowerCase() === site).options
        }
    }
</script>

<section id="options">
    <nav>
        <ul>
            {#each options as option}
            <li><a href={`/${$page.path.split('/')[1]}/${option.toLowerCase()}`}>{option}</a></li>
            {/each}
        </ul>
    </nav>
</section>


<style lang="scss">
    @use '../styles/parts/options.scss';
</style> 