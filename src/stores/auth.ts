import { browser } from '$app/env'
import { writable } from 'svelte/store'

export const user = writable(browser && (localStorage.getItem('user') || 'None'))
export const isAuth = writable(false)

export async function check() {
    await fetch('/auth/me', {
        method: 'POST'
    }).then(async (res) => {
        const data = await res.json()

        isAuth.set(data.user || false)
    })
}

export async function login(login: string) {
    let username: string = null

    await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: login
        })
    }).then(async (res) => {
        const data = await res.json()

        username = data.user
        localStorage.setItem('user', username)
        user.set(username)
    })

    return username
}
