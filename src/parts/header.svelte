<script lang="ts">
    import { clickInside, clickOutside } from '$lib/clickToggle'
    import { user, isAuth } from '$stores/auth'
    import Notifications from '$icons/notifications.svg'
    import Users from '$icons/users.svg'
</script>

<header id="header">
    {#if $isAuth}
        <input type="text" id="search" name="search" placeholder="Search"/>
        <section class="toggleArea">
            <div use:clickInside use:clickOutside id="notificationsToggle">
                <Notifications/>
            </div>
            <article id="notifications" class="itemToggle">
                <header>
                    <h3>Notifications</h3>
                </header>
                <div id="content" class="none">
                    <span>Nothing to show</span>
                </div>
            </article>
        </section>
        <section class="toggleArea">
            <div use:clickInside use:clickOutside id="userMenuToggle">
                <span class="icon"><Users/></span>
                <span class="name">{$user}</span>
            </div>
            <nav id="userMenu" class="itemToggle">
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
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        z-index: 100;

        :global(.visible) {
            top: 70px !important;
        }
        > *:last-child() {
            align-items: flex-start;
        }
        .itemToggle {
            position: absolute;
            box-shadow: var(--shadow);
            background-color: var(--secondary);
            border-radius: var(--radius);

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
        } 
        .itemToggle:not(.visible) {
            top: -200vh;
        }
        #search {
            box-shadow: var(--shadow);
            height: 50px;
            margin: 0 auto;
        }
        .toggleArea {
            position: relative;
            height: 50px;

            #notificationsToggle {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 100%;
                cursor: pointer;
            }
            #notifications {
                width: 300px;
                right: -15px;

                &:before {
                    border-bottom: 20px solid var(--primary) !important;
                }
                header {
                    border-top-left-radius: var(--radius);
                    border-top-right-radius: var(--radius);
                    background-color: var(--primary);
                    height: 40px;
                    display: flex;
                    align-items: center;
                    text-indent: 30px;
                }
                #content.none {
                    height: 200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    span {
                        color: var(--text);
                    }
                }
            }
            #userMenuToggle {
                box-shadow: var(--shadow);
                border-radius: var(--radius);
                background-color: var(--secondary);
                min-width: 150px;
                height: 100%;
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 0 20px 0 0;
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
            #userMenu {
                right: 20px;
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