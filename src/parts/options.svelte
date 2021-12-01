<script lang="ts">
    import { page } from "$app/stores";
    import { network, sites } from '$stores/sites'
    import { clickInside } from '$lib/clickToggle'
    import Menu from '$icons/menu.svg'

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

<section id="options" class="visible">
    <section use:clickInside={'#options'} id="pannelToggle">
        <Menu />
    </section>
    <nav>
        <menu>
            {#each options as option}
            <li class:current={link(option.toLowerCase())}>
                <a href="/{$page.path.split('/')[1]}/{option.toLowerCase()}">
                    {option}
                </a>
            </li>
            {/each}
        </menu>
    </nav>
</section>


<style lang="scss">
    #options:not(.visible) {
        width: 50px;
    }
    #options.visible {
        width: 250px;
    }
    #options {
        background-color: var(--secondary);
        overflow-x: hidden;
        transition: width 300ms ease;

        #pannelToggle {
            border-radius: var(--radius);
            background-color: var(--secondary);
            width: 50px;
            height: 50px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: auto;
        }
        nav menu {
            li.current {
                background-color: var(--primary);
            }
            li {
                a {
                    display: flex;
                    align-items: center;
                    height: 50px;
                    width: 100%;
                    text-indent: 50px;
                    transition: all 200ms ease;

                    &:hover {
                        background-color: var(--primary);
                    }
                }
            }
        }
    }
</style> 