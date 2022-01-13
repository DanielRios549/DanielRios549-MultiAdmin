<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
    import Card from '$components/Card.svelte'
</script>

<Meta
    title="Components/Card"
    component={Card}
    argTypes={{
        title: {
            type: 'string',
            defaultValue: 'Card Title',
            description: 'Set the title of the Card'
        }
    }}
/>

<Template let:args>
    <Card {...args}/>
</Template>

<Story source name="Default"/>