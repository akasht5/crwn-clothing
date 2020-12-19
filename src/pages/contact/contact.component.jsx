import React,{ Component } from 'react'

import InputButton from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import { ContactDescriptionContainer, ContactFormContainer, ContactPageContainer, SubmitButtonContainer } from './contact.styles';

class ContactPage extends Component{
    constructor(){
        super();

        this.state = {
            name : '',
            email : '',
            enquiryType : '',
            message : ''
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name,value } = e.target;

        this.setState({ [name]:value });
    }

    render(){
        return (
            <ContactPageContainer>
                <h2 class="title">CONTACT US</h2>
                <ContactDescriptionContainer>Have a question about CRWN Clothing, our threads or your order ? Let us know below and our crew will get back to as soon as possible ( typically within 2 bussiness days )</ContactDescriptionContainer>
                <ContactFormContainer>
                <InputButton
                type="text"
                name="name"
                value={this.state.name}
                label="Name"
                handleChange={this.handleChange}
                required
                />

                <InputButton 
                type="email"
                name="email"
                value={this.state.email}
                label="Email"
                handleChange={this.handleChange}
                required
                />

                <InputButton 
                type="text"
                name="enquiryType"
                value={this.state.enquiryType}
                label="EnquiryType"
                handleChange={this.handleChange}
                required
                />

                <InputButton 
                type="textarea"
                name="message"
                rows="50"
                cols="50"
                value={this.state.message}
                label="Message"
                handleChange={this.handleChange}
                required
                />
                <SubmitButtonContainer>
                    <CustomButton
                    type="submit"
                    value="Submit"
                    >Send Message</CustomButton>
                </SubmitButtonContainer>
                </ContactFormContainer>
        </ContactPageContainer>
        )
    }
}

export default ContactPage
