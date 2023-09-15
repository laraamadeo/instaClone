import { context } from "../logic/context.js"
import { loginUser } from '../logic/loginUser.js'
import './Login.css'
import { useContext } from "react"
import Context from "../Context.js"
export default function Login() {


    const { generateToast, freeze, unfreeze, navigate } = useContext(Context)

    function handleRegisterClick(event) {
        event.preventDefault()

        navigate('./register')
    }

    function handleLogin(event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        freeze(undefined, 'background')
        try {
            loginUser(email, password)
                .then(() => {
                    navigate('/')
                    unfreeze()
                })
                .catch(error => {
                    generateToast(error.message, 'error')
                    unfreeze()
                    return
                })
        } catch (error) {
            unfreeze()
            generateToast(error.message, 'error')
        } finally {
            event.target.password.value = ''
        }
    }

    return <div className="bg-[--violet-200] w-full flex justify-center items-center">
        <div className="centered-containers">

            <h1 className="title">Welcome back!</h1>

            <form className="centered-form" onSubmit={handleLogin}>
                <label htmlFor="email" className="text-field-label">Email</label>
                <input type="text" name="email" className="text-field" />

                <label htmlFor="password" className="text-field-label">Password</label>
                <input type="password" name="password" className="text-field" />

                <button className="button-S primary-button" type="submit">Log in</button>

                <div className="flex flex-row mt-[24px]">
                    <p className="body-text">New to <strong>Helio</strong>?</p><a href="" className="link ml-[8px]" onClick={handleRegisterClick}>Sign in</a>
                </div>
            </form>
        </div>
    </div>
}