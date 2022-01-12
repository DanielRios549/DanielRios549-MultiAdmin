<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
    import Todo from '$components/todo.svelte'
</script>

<Meta
    title="Components/Todo"
    component={Todo}
    argTypes={{
        title: {
            type: 'string',
            defaultValue: 'Todo List',
            description: 'Set the Todo Title'
        },
        items: {
            control: 'array',
            defaultValue: [],
            description: 'Set the items of Todo'
        }
    }}
/>

<Template let:args>
    <Todo {...args}/>
</Template>

<Story source name="Default"/>