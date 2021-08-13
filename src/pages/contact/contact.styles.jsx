import styled from 'styled-components'

export const ContactPageContainer = styled.div`
    width:650px;
    margin:50px auto;
    text-align: center;

    @media screen and (max-width:800px){
        width: auto;
        margin:10px;
    }
`;

export const ContactFormContainer = styled.form`
    width:450px;
    margin:0 auto;

    @media screen and (max-width:800px){
        width: auto;
        
    }
`;

export const ContactDescriptionContainer = styled.div`
    letter-spacing:0.3px;
`;

export const SubmitButtonContainer = styled.div`
    width:165px;
    margin:0 auto;
`;