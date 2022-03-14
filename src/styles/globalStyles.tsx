import styled, { createGlobalStyle, css } from 'styled-components';
import Theme from './theme';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Red Hat Display';
    }
    html {
        color: ${props => props.theme.text};
        background: ${props => props.theme.body};
    }
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1250px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 100px;

    @media screen and (max-width: 990px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

const buttonStyles = css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 7px 15px;
    margin-right: 10px;
    font-size: 1rem;
    border-radius: 20px;

    appearance: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 300ms ease;

    > * {
        margin-right: 8px;
    }
`;

export const Button = styled.a<{ theme: Theme; secondary: boolean }>`
    ${buttonStyles}

    color: ${props => (props.secondary ? props.theme.black : props.theme.white)};
    background: ${props => (props.secondary ? props.theme.white : props.theme.primary)};
    border: 1px solid ${props => (props.secondary ? props.theme.black : props.theme.primary)};
    margin-right: 20px;

    &:hover {
        color: ${props => (props.secondary ? props.theme.hover : props.theme.white)};
        background: ${props => (props.secondary ? props.theme.white : props.theme.hover)};
        border-color: ${props => props.theme.hover};
    }
`;

export default GlobalStyle;
