import { validators } from 'com'
import { context } from './context'
const { validateEmail, validatePassword } = validators
/**
 * Authenticates a user by email and password
 * @param {string} email user's email 
 * @param {string} password user's password 
 * @returns {string} user's id
 */

export const loginUser = (email, password) => {
    validateEmail(email)
    validatePassword(password)

    const credentials = { email, password }


    return fetch('https://api-instaclone.onrender.com/users/auth', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(res => {
            if (res.status !== 200) return res.json().then(({ error }) => { throw new Error(error) })

            return res.json()
        })
        .then(token => {
            context.token = token
        })
}
