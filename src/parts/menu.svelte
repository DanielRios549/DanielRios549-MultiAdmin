<script lang="ts">
    import { sites } from '$stores/sites'
    import { page } from '$app/stores'
</script>

<aside id="panel">
    <nav id="sites">
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
    <nav id="options">
        <ul>
            <li><a href={`${$page.path}/dashboard`}>Dashboard</a></li>
            <li><a href={`${$page.path}/posts`}>Posts</a></li>
            <li><a href={`${$page.path}/pages`}>Pages</a></li>
            <li><a href={`${$page.path}/tools`}>Tools</a></li>
            <li><a href={`${$page.path}/settings`}>Settings</a></li>
        </ul>
    </nav>
</aside>

<style lang="scss">
    @use '../styles/parts/menu.scss';
</style>