<script lang="ts">
    import { clickInside, clickOutside } from '$lib/clickToggle'
    import Icon from '$icons/notifications.svg'
</script>

<section id="notificationsSection" class="toggleArea">
    <section use:clickInside={{ item: 'next' }} id="notificationsToggle">
        <span class="iconCenter"><Icon/></span>
    </section>
    <article use:clickOutside id="notifications" class="toggle">
        <header>
            <h3>Notifications</h3>
        </header>
        <div id="content" class="none">
            <span>Nothing to show</span>
        </div>
    </article>
</section>

<style lang="scss">
    #notificationsSection {
        position: relative;

        #notificationsToggle {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
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
    }
</style>