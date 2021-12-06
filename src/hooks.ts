import type { Handle, GetSession } from '@sveltejs/kit'
import { handleSession } from 'svelte-kit-cookie-session'


export const getSession: GetSession = ({locals}) => {
    return locals.session.data
}

export const handle: Handle = handleSession({
    secret: import.meta.env.JWT_SECRET
})