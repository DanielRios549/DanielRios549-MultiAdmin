<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
    import Card from '$components/card.svelte'
</script>

<Meta title="Components/Card" component={Card}/>

<Template let:args>
    <Card {...args}/>
</Template>

<Story name="Simple"/>