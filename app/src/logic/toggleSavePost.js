
/**
 * Toggles save or unsave a post
 * @param {object} post a post
 * @param {string} token user's id
 */

import { context } from "./context";

//toggle rename -> toggleSavePost
export default function toggleSavePost(postId, token) {

    return fetch(`https://api-instaclone.onrender.com/posts/save/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${context.token}`
        }
    })
        .then(res => {
            if (res.status !== 201) return res.json().then(({ error }) => { throw new Error(error) })
        })
}