import React,{ useState } from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component'
import { SignInContainer,ButtonsContainer } from './signin.styles'
import { connect } from 'react-redux'
import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart,googleSignInStart }) => {

    const [userCredentials,setUserCredentials] = useState({
        email : '',
        password : ''
    });

    const { email,password } = userCredentials;

    const handleChange = (e) => {
        e.preventDefault();
        
        const { name,value } = e.target;
        setUserCredentials({ ...userCredentials,[name]:value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        emailSignInStart( email,password );
    }

    return(
        <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput
            type="email" 
            name="email" 
            value={email} 
            handleChange={handleChange} 
            label="email"
            required
            />
            <FormInput 
            type="password" 
            name="password" 
            value={password} 
            handleChange={handleChange} 
            label="password"
            required
            />
            <ButtonsContainer>
                <CustomButton 
                type="submit" 
                value="Submit" 
                >Sign in</CustomButton>
                <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn
                >Sign in with Google</CustomButton>
            </ButtonsContainer>
            
        </form>
    </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null,mapDispatchToProps)(SignIn);