import { browser } from '$app/env'
import { writable } from 'svelte/store'


const defaultTasks = {
    'network': ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    'reakut': ['Morning Task', 'Afternoon task', 'Evening Task'],
    'second': ['Send Email', 'Verify User', 'Check Prices']
}

export const tasks = writable(browser && localStorage.getItem('tasks') || defaultTasks)