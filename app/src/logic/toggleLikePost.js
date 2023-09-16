

/**
 * Toggles the like or unlike for a post
 * @param {object} post A post object
 * @param {string} token user's id
 */

import { context } from "./context";

export default function toggleLikePost(postId, token) {

    return fetch(`https://api-instaclone.onrender.com/posts/like/${postId}`, {
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



