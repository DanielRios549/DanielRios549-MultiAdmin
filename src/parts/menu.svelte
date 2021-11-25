<script lang="ts">
    import { network, sites } from '$stores/sites'
    import { theme, handleTheme } from '$stores/theme'
    import { page } from '$app/stores'
    import Options from '$parts/options.svelte'

    import Dark from '$icons/dark.svg'
    import Light from '$icons/light.svg'
</script>

<aside id="panel">
    <section id="sites">
        <nav>
            <ul>
                <li class:current={$page.path.split('/')[1] === `${network.name.toLowerCase()}`}>
                    <a href={`/${network.name.toLowerCase()}/dashboard`} class="siteLink">{
                        network.name
                    }</a>
                </li>
                {#each $sites as site}
                <li class:current={$page.path.split('/')[1] === `${site.name.toLowerCase()}`}>
                    <a href={`/${site.name.toLowerCase()}/dashboard`} class="siteLink">{
                        site.name
                    }</a>
                </li>
                {/each}
            </ul>
        </nav>
        <section id="theme">
            <input hidden type="checkbox" checked={$theme === 'dark'} name="themeInput" id="themeInput" on:change={handleTheme}/>
            <label for="themeInput" id="themeSwitcher">
                {#if $theme === 'dark'}
                <Light />
                {:else}
                <Dark />
                {/if}
            </label>
        </section>
    </section>
    <Options />
</aside>

<style lang="scss">
    @use '../styles/parts/menu.scss';
</style>