import { context } from "./context"

export default function sellPost(postId, actualPrice, newPrice) {

    if (actualPrice === newPrice) {
        callback(new Error('Price should be different to previous one'))

        return
    }

    if (newPrice < 0) {
        callback(new Error('Price must be higher than 0'))

        return
    }

    if (newPrice > 1000) {
        callback(new Error('Price must be lower than 1000'))

        return
    }

    const price = { newPrice }

    return fetch(`https://api-instaclone.onrender.com/posts/price/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${context.token}`
        },
        body: JSON.stringify(price)
    })
        .then(res => {
            if (res.status !== 201) return res.json().then(({ error }) => { throw new Error(error) })
        })

}