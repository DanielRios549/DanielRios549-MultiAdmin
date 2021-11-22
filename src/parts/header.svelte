<script lang="ts">
    import {handleTheme} from '$stores/theme'
    import SVG from 'svelte-inline-svg'
</script>

<header>
    <button on:click={handleTheme}>Change Theme</button>
    <SVG src="/icons/dark.svg"/>
    <menu>
        <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
        </ul>
    </menu>
</header>

<style lang="scss">
    @use '../styles/parts/header.scss';
</style>