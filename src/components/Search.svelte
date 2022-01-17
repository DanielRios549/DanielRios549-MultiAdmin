<script lang="ts">
    import Icon from '$icons/search.svg'

    export let focused: boolean = false

    let search: string = ''
</script>

<section id="search" class:focused>
    <label for="searchInput" id="icon" class="iconCenter">
        <Icon/>
    </label>
    <input type="text" id="searchInput" name="search" placeholder="Search" bind:value={search}/>
    <section id="results">
        <span>{search}</span>
    </section>
</section>

<style lang="scss">
    #search.focused {
        width: 200px;

        #searchInput {
            text-indent: 0;
            width: 100%;
            padding-left: 50px;
        }
    }
    #search:not(.focused) #searchInput {
        &:focus {
            text-indent: 0;
            width: 200px;
            padding-left: 50px;
        }
    }
    #search {
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
            background-color: var(--primary);
            position: relative;
            top: -108%;
            left: -4px;
            height: 200px;
            width: 104%;
            display: none;
            z-index: 97;
            padding: 60px 20px 20px 20px;
        }
    }
</style>