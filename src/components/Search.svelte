<script lang="ts">
    import { clickInside, clickOutside } from '$lib/clickToggle'
    import Icon from '$icons/search.svg'

    export let toggle: boolean = false

    let search: string = ''
    const active: boolean = false
</script>

<section id="search" use:clickInside={{ item: '#search' }} use:clickOutside>
    <span class="iconCenter">
        <Icon/>
    </span>
    <input type="text" id="searchInput" class:toggle name="search" placeholder="Search" bind:value={search}/>
</section>
<section id="results">
    <header>Search Results</header>
    <span>{search}</span>
</section>


<style lang="scss">
    #search {
        height: 50px;
        cursor: pointer;

        #searchInput.toggle {
            &:focus {
                text-indent: 0;
                width: 200px;
                cursor: text;
                margin-left: 30px;
            }
        }
        #searchInput:not(.toggle) {
            text-indent: 0;
            width: 200px;
            cursor: text;
            margin-left: 30px;
        }
        #searchInput {
            border: none;
            background-color: transparent;
            text-indent: 50px;
            height: 100%;
            width: 50px;
            z-index: 98;
            transition: width 300ms ease;
        }
}
    #results {
        display: none;
    }
</style>