import React,{ Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { SignUpContainer } from './signup.styles'
import { signUpStart } from '../../redux/user/user.actions'

class SignUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        };
    }

    handleChange = (e) => {
        const { name,value } = e.target;
        this.setState({ [name]:value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName,email,password,confirmPassword } = this.state;
        const { signUpStart } = this.props;

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

    render(){
        const { displayName,email,password,confirmPassword } = this.state;

        return (
            <SignUpContainer>
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        input="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        input="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        input="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        input="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required                   
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);
