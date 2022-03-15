import styled from 'styled-components';
import { Container, Button } from '../../styles/globalStyles';
import Theme from '../../styles/theme';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 0px;
`;

export const NavLogo = styled.a`
    justify-self: flex-start;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition: 200ms all ease;

    &:hover {
        opacity: 0.7;
        transform: translateY(-10%);
    }
`;

export const BurgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.7rem;
        cursor: pointer;
    }
`;

export const NavItems = styled.ul`
    list-style: none;
    text-align: center;

    /* @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease-in;
        background: #101522;
    } */
`;

export const NavItem = styled(Link)<{ to: string }>`
    text-transform: capitalize;
    margin-right: 30px;
    cursor: pointer;
    transition: all 200ms ease-in;
    font-size: 1.1rem;
    font-weight: 500;

    &:hover {
        opacity: 0.6;
        transform: translateY(-10%);
    }
`;

export const ResumeButton = styled(Button)`
    font-size: 0.9rem;
`;

export const ThemeToggle = styled.input<{ theme: Theme }>`
    appearance: none;
    -webkit-appearance: none;
    width: 40px;
    height: 20px;
    border-radius: 3em;
    background: ${props => props.theme.text};
    outline: 0;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;
    position: relative;

    &:checked {
        background: ${props => props.theme.text};
    }

    &:after {
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 3em;
        background: ${props => props.theme.body};
        position: absolute;
        transform: scale(0.7);
        left: 0;
        transition: left 200ms ease-in-out;
    }

    &:checked:after {
        left: 20px;
    }
`;
