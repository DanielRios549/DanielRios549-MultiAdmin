import type { RequestHandler } from '@sveltejs/kit'


export const get: RequestHandler = async () => {
    return {
        body: {
            message: 'Not Found'
        }
    }
}

export const post: RequestHandler = async ({locals}) => {
    const currentUser = locals.session.data?.user;

    return {
        body: {
            user: currentUser
        }
    }
}