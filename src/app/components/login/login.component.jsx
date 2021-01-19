import React from 'react'
import './login.style.css'

const Login = () => {

    const loginToApp = () => {}

    const register = () => {}

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?" alt=""/>
            <form>
                <input placeholder="Full name (required if registering)" type="text" />
                <input placeholder="Profile pic URL (optional)" type="text"/>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{""}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export { Login }
