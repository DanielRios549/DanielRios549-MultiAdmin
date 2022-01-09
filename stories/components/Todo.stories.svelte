<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
    import Todo from '$components/todo.svelte'
</script>

<Meta title="Components/Todo" component={Todo}/>

<Template let:args>
    <Todo {...args}/>
</Template>

<Story name="Empty" args={Object.keys(Todo)}/>