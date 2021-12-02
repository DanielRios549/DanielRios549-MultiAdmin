<script lang="ts">
    import { clickInside, clickOutside } from '$lib/clickToggle'
    import Users from '$icons/users.svg'
</script>

<header id="header">
    <input type="text" id="search" name="search" placeholder="Search"/>
    <section>
        <div use:clickInside use:clickOutside id="userMenuToggle">
            <span class="icon"><Users/></span>
            <span class="name">User</span>
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
    #header {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;

        :global(.visible) {
            top: 75px !important;
        }
        > *:last-child() {
            align-items: flex-start;
        }
        #search {
            box-shadow: var(--shadow);
            height: 50px;
            margin: 0 auto;
        }
        #userMenuToggle {
            box-shadow: var(--shadow);
            border-radius: var(--radius);
            background-color: var(--secondary);
            min-width: 150px;
            height: 50px;
            display: flex;
            align-items: center;
            margin: 0 10px 0 0;
            padding: 10px;
            user-select: none;
            cursor: pointer;
            z-index: 100;

            .icon {
                background-color: var(--primary);
                border-radius: var(--radius);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .name {
                color: var(--text);
                display: flex;
                flex-grow: 1;
                justify-content: flex-end;
                align-items: center;
                width: 100%;
                height: 100%;
            }
        }
        #userMenu:not(.visible) {
            top: -200vh;
        }
        #userMenu {
            box-shadow: var(--shadow);
            background-color: var(--secondary);
            border-radius: var(--radius);
            position: absolute;
            right: 10px;
            width: 150px;
            height: 0;
            opacity: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            transition: opacity 300ms ease;

            &::before {
                content: '';
                position: absolute;
                top: -40px;
                right: 20px;
                border-top: 20px solid transparent;
                border-left: 20px solid transparent;
                border-right: 20px solid transparent;
                border-bottom: 20px solid var(--secondary);
            }
            menu {
                border-radius: var(--radius);
                width: 100%;
                overflow: hidden;

                li {
                    height: 30px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    padding-right: 20px;
                    cursor: pointer;
                    transition: all 400ms ease;
                    color: var(--text);

                    &:hover {
                        background-color: var(--highlight);
                        color: var(--text2);
                    }
                }
            }
        }
    }
</style>