import styled from 'styled-components'

export const SignUpContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:800px){
        width: 90vw;
        margin:0 15px;
        margin-top:50px;
        margin-bottom: 50px;
    }
`;