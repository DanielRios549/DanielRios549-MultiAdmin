<script lang="ts">
    import { sites } from '$stores/sites'
    import { theme, handleTheme } from '$stores/theme'
    import { page } from '$app/stores'

    import Dark from '$static/icons/dark.svg'
    import Light from '$static/icons/light.svg'
</script>

<aside id="panel">
    <section id="sites">
        <nav>
            <ul>
                <li class:current={$page.path === '/'}><a href="/">Network</a></li>
                {#each $sites as site}
                <li class:current={$page.path === `/site/${site.name.toLowerCase()}`}>
                    <a href={`/site/${site.name.toLowerCase()}`}>{
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
    <section id="options">
        <nav>
            <ul>
                <li><a href={`${$page.path}/dashboard`}>Dashboard</a></li>
                <li><a href={`${$page.path}/posts`}>Posts</a></li>
                <li><a href={`${$page.path}/pages`}>Pages</a></li>
                <li><a href={`${$page.path}/tools`}>Tools</a></li>
                <li><a href={`${$page.path}/settings`}>Settings</a></li>
            </ul>
        </nav>
    </section>
</aside>

<style lang="scss">
    @use '../styles/parts/menu.scss';
</style>