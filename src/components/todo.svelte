<script lang="ts">
    export let name: string = 'Todo List'
    export let items: string[] | object[] = []
</script>

<section id="todo">
    <header>
        <h3>{name}</h3>
    </header>
    {#if items.length <= 0}
        <span>No Items to Show.</span>
    {:else}
        <ul id="items">
            {#each items as item}
                <li>
                    <input type="checkbox"/>
                    <span>{item}</span>
                    <button></button>
                </li>
            {/each}
        </ul>
    {/if}
</section>


<style lang="scss">
    #todo {
        box-shadow: var(--shadow);
        border-radius: var(--radius);
        background-color: var(--secondary);
        height: 400px;
        max-width: 50%;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        header {
            border-bottom: 3px solid var(--primary);
            height: 50px;
            display: flex;
            align-items: center;
        }
        #items {
            overflow-y: auto;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 3px;

            li {
                background-color: var(--color3);
                height: 40px;

                input[type="checkbox"] {
                    margin: 0 20px;

                    &:checked + span {
                        text-decoration: line-through;
                        color: var(--color4);
                    }
                }
            }
        }
    }
</style>