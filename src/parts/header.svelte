<script lang="ts">
    import { clickInside, clickOutside } from '$lib/clickToggle'
    let menuVisible = false
</script>

<header>
    <section>Menu</section>
    <input type="text" id="search" name="search" placeholder="Search"/>
    <menu use:clickOutside={() => menuVisible = false} on:click={() => menuVisible = clickInside(menuVisible)} class:visible={menuVisible === true}>
        <section>
            <img src="/user.jpg" alt="UserImage" width={30}/>
            <span>User</span>
        </section>
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