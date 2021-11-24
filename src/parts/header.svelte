<script lang="ts">
    import { clickInside, clickOutside } from '$lib/clickToggle'
</script>

<header>
    <section id="pannelToggle">Menu</section>
    <input type="text" id="search" name="search" placeholder="Search"/>
    <section>
        <div id="userMenuToggle" use:clickInside use:clickOutside>
            <img src="/user.jpg" alt="UserImage" width={30}/>
            <span>User</span>
        </div>
        <menu id="userMenu">
            <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </menu>
    </section>
    
</header>

<style lang="scss">
    @use '../styles/parts/header.scss';
</style>