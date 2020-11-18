import React,{ Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth,createUserProfileDocument } from '../../firebase/firebase.utils'

import './signup.styles.scss'

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

        if(password !== confirmPassword){
            alert("Passwords don't match !");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            const user10 = await createUserProfileDocument(user,{displayName});
                
            console.log(user10);

            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            });
            
        } catch (error) {
            console.log("Error : ",error);
        }
    }

    render(){
        const { displayName,email,password,confirmPassword } = this.state;

        return (
            <div className="sign-up">
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
            </div>
        );
    }
}

export default SignUp;
