
/**
 * Returns all the posts of the database in reverse order
 * @param {string} token user's id
 * @returns {Array} posts in reverse order
 */

import { context } from "./context";

export default function retrievePosts() {

    return (async () => {

        const res = await fetch('https://api-instaclone.onrender.com/posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${context.token}`
            }
        })

        if (res.status !== 200) {
            const error = await res.json()
            throw error
        } else {
            const posts = await res.json()
            return posts
        }

    })()
}