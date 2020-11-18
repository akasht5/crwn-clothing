import React,{ Component } from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component'
import './signin.styles.scss'
import { auth,signInWithGoogle } from '../../../src/firebase/firebase.utils'

class SignIn extends Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        };
    }

    handleChange = (e) => {
        e.preventDefault();

        const { name,value } = e.target;
        this.setState({ [name]:value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email,password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email : '',password : ''});
            console.log('User Signed In !');
        } catch (error) {
            console.log(error);
        }


        
    }

    render(){
        return(
            <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput
                type="email" 
                name="email" 
                value={this.state.email} 
                handleChange={this.handleChange} 
                label="email"
                required
                />
                <FormInput 
                type="password" 
                name="password" 
                value={this.state.password} 
                handleChange={this.handleChange} 
                label="password"
                required
                />
                <div className="buttons">
                    <CustomButton 
                    type="submit" 
                    value="Submit" 
                    >Sign in</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn
                    >Sign in with Google</CustomButton>
                </div>
                
            </form>
        </div>
        )
    }
}

export default SignIn;