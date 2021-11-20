<script lang="ts">
    import {handleTheme} from '../stores/theme'
</script>

<header>
    <button on:click={handleTheme}>Change Theme</button>
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