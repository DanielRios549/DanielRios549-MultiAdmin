<script lang="ts">
    import Icon from '$icons/search.svg'
</script>

<span class="icon">
    <Icon/>
</span>
<input type="text" id="search" name="search" placeholder="Search"/>

<style lang="scss">
    #search {
        border: none;
        background-color: transparent;
        text-indent: 50px;
        height: 100%;
        width: 50px;
        cursor: pointer;
        z-index: 98;
        transition: width 300ms ease;

        &:focus {
            text-indent: 0;
            width: 200px;
            cursor: text;
            margin-left: 30px;
        }
    }
</style>