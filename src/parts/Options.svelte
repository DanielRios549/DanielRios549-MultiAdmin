<script lang="ts">
    import { page } from '$app/stores'
    import { saves, keys } from '$stores/saves'
    import { network, sites, icons } from '$stores/sites'
    import { clickInside } from '$lib/clickToggle'
    import Menu from '$icons/menu.svg'
    import type { List } from '$lib/types'

    let options: List = []
    let activeLink: any

    const getLink = (name: string | object) => {
        if (typeof name === 'string') {
            return name.toLowerCase()
        }
    }

    $: {
        const path = $page.url.pathname
        const site = path.split('/')[1]

        if (site === 'network') {
            options = network.options
        }
        else {
            options = $sites.find(item => item.name === site).options
        }
        activeLink = (link: string) => $page.url.pathname.split('/')[2] === link.toLowerCase()
    }
</script>

<section id="options" class:visible={saves[keys.menu]}>
    <section use:clickInside={{ item: '#options', save: true, key: keys.menu }} id="pannelToggle">
        <Menu />
    </section>
    <nav>
        <menu>
            {#each options as option}
            <li class:current={activeLink(option)}>
                <a href="/{$page.url.pathname.split('/')[1]}/{getLink(option)}">
                    <svelte:component this={icons[getLink(option)]}/>
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
                user-select: none;

                a {
                    position: relative;
                    display: flex;
                    align-items: center;
                    height: 50px;
                    width: 100%;
                    text-indent: 50px;
                    transition: background-color 200ms ease;

                    &:hover {
                        background-color: var(--primary);
                    }
                    :global(svg) {
                        position: absolute;
                        left: 10px;
                    }
                }
            }
        }
    }
</style> 