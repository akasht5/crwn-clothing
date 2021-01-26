import React,{ useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { SignUpContainer } from './signup.styles'
import { signUpStart } from '../../redux/user/user.actions'

const SignUp = ({ signUpStart }) => {

    const [data,setData] = useState({
        displayName : '',
        email : '',
        password : '',
        confirmPassword : ''
    });

    const { displayName,email,password,confirmPassword } = data;

    const handleChange = (e) => {
        const { name,value } = e.target;
        setData({ ...data,[name]:value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords don't match !");
            return;
        }
        try {
            signUpStart({displayName,email,password});
        } catch (error) {
            console.log("Error : ",error);
        }
    }

    return (
        <SignUpContainer>
            <h2 className="title">I don't have an account</h2>
            <span>Sign up with email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    input="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput 
                    input="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput 
                    input="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput 
                    input="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required                   
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);
