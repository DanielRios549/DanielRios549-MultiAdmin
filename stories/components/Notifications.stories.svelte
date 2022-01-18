<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
    import Notifications from '$components/Notifications.svelte'
</script>

<Meta
    title="Components/Notifications"
    component={Notifications}
/>

<Template let:args>
    <div class="wrapper">
        <Notifications {...args}/>
    </div>
    <style lang="scss">
        .wrapper {
            display: flex;
            justify-content: flex-end;
            width: 300px;
        }
    </style>
</Template>

<Story source name="Default"/>