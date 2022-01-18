<script lang="ts">
    import Icon from '$icons/search.svg'

    export let opened: boolean = false

    let search: string = ''
</script>

<section id="search" class:opened class="toggleArea">
    <label for="searchInput" id="icon" class="iconCenter">
        <Icon/>
    </label>
    <input type="text" id="searchInput" name="search" placeholder="Search" bind:value={search}/>
    <article id="results" class="toggle">
        <span>{search}</span>
    </article>
</section>

<style lang="scss">
    #search.opened {
        width: 200px;

        #searchInput {
            text-indent: 0;
            width: 100%;
            padding-left: 50px;
        }
    }
    #search:not(.opened) #searchInput {
        &:focus {
            text-indent: 0;
            width: 200px;
            padding-left: 50px;
        }
    }
    #search {
        position: relative;
        height: 50px;
        cursor: pointer;

        #icon {
            cursor: pointer;
            z-index: 99;
        }
        #searchInput {
            border: none;
            position: relative;
            background-color: var(--secondary);
            text-indent: 50px;
            height: 100%;
            width: 50px;
            z-index: 98;
            transition: width 300ms ease;

            &:focus + #results {
                display: flex;
            }
        }
        #results {
            border-radius: var(--radius);
            background-color: var(--secondary);
            position: absolute;
            top: 70px;
            right: 0;
            height: 300px;
            width: 400px;
            display: none;
            z-index: 97;
            padding: 20px;
        }
    }
</style>