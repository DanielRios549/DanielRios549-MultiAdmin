<script lang="ts">
    import { clickInside, clickOutside } from '$lib/clickToggle'
    import { user, isAuth } from '$stores/auth'
    import Search from '$components/Search.svelte'
    import Notifications from '$icons/notifications.svg'
    import Users from '$icons/users.svg'
</script>

<header id="header">
    {#if $isAuth}
        <Search opened/>
        <section class="toggleArea">
            <div use:clickInside={{ item: 'next' }} id="notificationsToggle">
                <span class="iconCenter"><Notifications/></span>
            </div>
            <article use:clickOutside id="notifications" class="itemToggle" >
                <header>
                    <h3>Notifications</h3>
                </header>
                <div id="content" class="none">
                    <span>Nothing to show</span>
                </div>
            </article>
        </section>
        <section class="toggleArea">
            <div use:clickInside={{ item: 'next' }} id="userMenuToggle">
                <span class="iconLeft"><Users/></span>
                <span class="name">{$user}</span>
            </div>
            <nav use:clickOutside id="userMenu" class="itemToggle">
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

        :global {
            .visible {
                top: 70px !important;
            }
            > section, article, div {
                box-shadow: var(--shadow);
                border-radius: var(--radius);
                background-color: var(--secondary);
            }
            .itemToggle {
                border-radius: var(--radius);
                position: absolute;
                box-shadow: var(--shadow);
                background-color: var(--secondary);

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
        }
        .itemToggle:not(.visible) {
            top: -200vh;
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
            #userMenu {
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