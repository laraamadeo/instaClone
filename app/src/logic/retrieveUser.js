import { context } from "./context";

export default function retrieveUser() {

    return (async () => {

        const res = await fetch('https://api-instaclone.onrender.com/users', {
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
            const user = await res.json()
            return user
        }

    })()
}
