<script lang="ts">
    import Dark from '$icons/dark.svg'

    export let title = 'Card Title'
</script>

<article class="card">
    <header>
        <h3>{title}</h3>
    </header>
    <section class="content">
        <span>Card</span>
        <Dark />
    </section>
</article>

<style lang="scss">
    .card {
        box-shadow: var(--shadow);
        background-color: var(--secondary);
        border-radius: var(--radius);
        overflow: hidden;
        width: 250px;
        height: 150px;
        cursor: pointer;
        display: flex;
        flex-direction: column-reverse;

        header {
            background-color: var(--color3);
            padding: 0 0 0 10px;
        }
        .content {
            flex-grow: 1;
            padding: 0 0 0 10px;
            display: flex;
            align-items: center;

            &:hover {
                :global {
                    svg {
                        width: 120px !important;
                        height: 120px !important;
                    }
                }
            }
            span {
                flex-grow: 1;
            }
            :global {
                svg {
                    width: 100px !important;
                    height: 100px !important;

                    transition: width 200ms ease, height 200ms ease;

                    path {
                        fill: var(--icon2) !important;
                    }
                }
            }
        }
    }
</style>