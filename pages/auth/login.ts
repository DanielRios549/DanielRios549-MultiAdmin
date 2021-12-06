import type { RequestHandler } from '@sveltejs/kit'


export const get: RequestHandler = async () => {
    return {
        body: {
            message: 'Not Found'
        }
    }
}

export const post: RequestHandler = async ({locals, body}) => {
    locals.session.data = body

    return {
        body: locals.session.data
    }
}