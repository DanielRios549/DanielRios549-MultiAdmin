<script lang="ts">
    import { clickInside, clickOutside } from '$lib/clickToggle'
    import { user, isAuth } from '$stores/auth'
    import Search from '$components/Search.svelte'
    import Notifications from '$components/Notifications.svelte'
    import Users from '$icons/users.svg'
</script>

<header id="header">
    {#if $isAuth}
        <Search/>
        <Notifications/>
        <section id="userMenu" class="toggleArea">
            <div use:clickInside={{ item: 'next' }} id="userMenuToggle">
                <span class="iconLeft"><Users/></span>
                <span class="name">{$user}</span>
            </div>
            <nav use:clickOutside id="userMenuItems" class="toggle">
                <menu>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </menu>
            </nav>
        </section>
    {/if}
</header>

<style lang="scss">
    #header {
        padding: 10px 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        z-index: 100;
        padding-right: 20px;

        #userMenu {
            position: relative;
            height: 50px;

            #userMenuToggle {
                min-width: 150px;
                height: 100%;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px;
                user-select: none;
                cursor: pointer;
                z-index: 100;

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
            #userMenuItems {
                right: 0;
                height: 0;
                width: 150px;
                opacity: 0;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
                transition: opacity 300ms ease;

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
    }
</style>