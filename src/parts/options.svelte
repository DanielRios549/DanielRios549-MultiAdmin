<script lang="ts">
    import { page } from "$app/stores";
    import { network, sites } from "$stores/sites";

    let options: string[] = []
    let link: any

    $: {
        const path = $page.path
        const site = path.split('/')[1]

        if (site == 'network') {
            options = network.options
        }
        else {
            options = $sites.find(item => item.name.toLowerCase() === site).options
        }
        link = (link: string) => $page.path.split('/')[2] === link.toLowerCase()
    }
</script>

<section id="options">
    <nav>
        <menu>
            {#each options as option}
            <li class:current={link(option.toLowerCase())}>
                <a href={`/${$page.path.split('/')[1]}/${option.toLowerCase()}`}>
                    {option}
                </a>
            </li>
            {/each}
        </menu>
    </nav>
</section>


<style lang="scss">
    @use '../styles/parts/options.scss';
</style> 