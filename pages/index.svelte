<script lang="ts">
    import { network, sites } from '$stores/sites'
    import { login, isAuth } from '$stores/auth'
    import { fly } from 'svelte/transition'
    import { clickPrev, clickNext } from  '$lib/clickScroll'

    const title: string = 'Home'

    const hangleLogin = async (event: any) => {
        const user = new FormData(event.target).get('user')
        const data = await login(user.toString())
    
        data === user ? $isAuth = true : false
    }
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<main>
    {#if $isAuth}
        <button use:clickPrev={'#sites'} id="back">{'<'}</button>
        <button use:clickNext={'#sites'} id="next">{'>'}</button>
        <nav>
            <menu id="sites" style="left: 0">
                <li in:fly={{ x: 200, duration: 600 }}>
                    <a href="{network.link}/dashboard">
                        <img src="/sites/portrait/{network.name}.jpg" alt="NetworkImage">
                        <span>{network.displayName}</span>
                    </a>
                </li>
                {#each $sites as site, index}
                    <li in:fly={{ x: 200 * (index + 2), duration: 600 }}>
                        <a href="{site.link}/dashboard">
                            <img src="/sites/portrait/{site.name}.jpg" alt="{site.name}Image">
                            <span>{site.displayName}</span>
                        </a>
                    </li>
                {/each}
            </menu>
        </nav>
    {/if}
</main>
<aside>
    {#if !$isAuth}
        <p class="info">Enter with your account</p>
        <form on:submit|preventDefault={hangleLogin}>
            <input type="text" name="user" id="user" required>
            <button type="submit">Enter</button>
        </form>
    {:else}
        <p class="info">Choose a site to manage.</p>
        <button>Avaiable Sites</button>
    {/if}
</aside>

<style lang="scss">
    @import "../styles/breakpoints";

    * {
        --shadow: 2px 2px 10px rgba(0, 0, 0, .5);
    }
    button {
        border-radius: 50px;
        box-shadow: var(--shadow);
        color: var(--text);
        cursor: pointer;
    }
    aside {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;

        > * {
            color: var(--text);
            z-index: 100;
            position: relative;
            left: 50%;
            width: 300px;
        }
        p {
            text-shadow: var(--shadow);
            font-size: 2.5em;
        }
        button {
            background-color: var(--primary);
            height: 80px;
            font-size: 1.2em;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 50px;

            input {
                border: 2px solid var(--text);
                background-color: var(--primary);
                height: 60px;
            }
        }
    }
    main {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row !important;
        align-content: center;
        justify-content: flex-end;

        button#back {
            right: 120px;
        }
        button#next {
            right: 50px;
        }
        button {
            background-color: var(--secondary);
            position: absolute;
            top: 100px;
            border-radius: 50%;
            height: 50px;
            width: 50px;
            transition: transform 300ms ease;
            z-index: 99;

            &:hover {
                transform: scale(1.3);
            }
        }
        nav {
            position: relative;
            top: 80px;
            height: 90%;
            width: 700px;
            overflow: hidden;
            
            @include desktopLarge() {
                width: 900px;
            }
            menu {
                position: relative;
                height: 100%;
                padding: 0 70px;
                display: flex;
                align-content: center;
                gap: 20px;
                transition: left 300ms ease;
                
                li a {
                    box-shadow: var(--shadow);
                    background-color: var(--secondary);
                    border-radius: var(--radius);
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr 50px;
                    height: 500px;
                    width: 280px;
                    transition: all 300ms ease;
                    overflow: hidden;
                    z-index: 99;

                    &:hover {
                        transform: scale(1.3) rotate(1.5deg);
                        z-index: 100;
                    }
                    img {
                        object-fit: cover;
                        grid-column: 1;
                        grid-row: 1/3;
                        z-index: 97;
                    }
                    span {
                        padding: 0 0 10px 10px;
                        grid-column: 1;
                        grid-row: 2/3;
                        z-index: 98;
                    }
                }
            }
        }
    }
</style>