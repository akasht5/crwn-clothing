import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Open Sans Condensed', sans-serif;
        padding:20px 60px;
        user-select:none;

        @media screen and (max-width:800px){
            padding:15px 5px 0px 15px;
        }
    }
    *{
        box-sizing: border-box;
    }
    body a{
        text-decoration: none;
        color:black;
    }
`;
