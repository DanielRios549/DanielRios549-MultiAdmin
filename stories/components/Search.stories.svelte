<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
    import Search from '$components/Search.svelte'
</script>

<Meta
    title="Components/Search"
    component={Search}
    argTypes={{
        opened: {
            type: 'boolean',
            defaultValue: true,
            description: 'Set if the input will be shown or only when the user focuses it.'
        }
    }}
/>

<Template let:args>
    <Search opened {...args}/>
</Template>

<Story source name="Default"/>