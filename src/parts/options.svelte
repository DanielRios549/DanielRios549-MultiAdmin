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
    #options {
        background-color: var(--secondary);
        padding-top: 40px;
        width: 100%;

        nav menu {
            li.current {
                background-color: var(--primary);
            }
            li {
                a {
                    display: flex;
                    align-items: center;
                    height: 30px;
                    width: 100%;
                    text-indent: 20px;
                    transition: all 200ms ease;

                    &:hover {
                        background-color: var(--primary);
                    }
                }
            }
        }
    }
</style> 