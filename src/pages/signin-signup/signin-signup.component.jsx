import React from 'react'
import './signin-signup.styles.scss'
import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.component'

const SignInAndSignUpPage = () => {
    return (
        <div className="signin-and-signup">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage
