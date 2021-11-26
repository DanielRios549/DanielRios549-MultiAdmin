<script lang="ts">
    import { clickInside, clickOutside } from '$lib/clickToggle'
</script>

<header>
    <section id="pannelToggle">Menu</section>
    <input type="text" id="search" name="search" placeholder="Search"/>
    <section>
        <div use:clickInside use:clickOutside id="userMenuToggle">
            <img src="/user.jpg" alt="UserImage" width={30}/>
            <span>User</span>
        </div>
        <nav id="userMenu">
            <menu>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
            </menu>
        </nav>
    </section>
    
</header>

<style lang="scss">
    @use '../styles/parts/header.scss';
</style>