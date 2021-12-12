<script lang="ts">
    export let name: string = 'Todo List'
</script>

<section id="todo">
    <header>
        <h3>{name}</h3>
    </header>
    <ul id="items">
        <li><input type="checkbox"/><span>Item to do</span></li>
        <li><input type="checkbox"/><span>Item to do</span></li>
        <li><input type="checkbox"/><span>Item to do</span></li>
        <li><input type="checkbox"/><span>Item to do</span></li>
        <li><input type="checkbox"/><span>Item to do</span></li>
    </ul>
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
                height: 30px;

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