import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Red Hat Display';
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1250px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 990px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export default GlobalStyle;
