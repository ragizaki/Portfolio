import styled from 'styled-components';
import { Container, Button } from '../../styles/globalStyles';
import Theme from '../../styles/theme';
import { Link } from 'react-scroll';

export const Nav = styled.nav<{ theme: Theme; isDark: boolean }>`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    background: ${props => props.theme.body};
    border-bottom: 0.1px solid ${props => (props.isDark ? 'gray' : 'lightgray')};
`;

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

export const NavLogo = styled.a<{ theme: Theme }>`
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

export const MenuIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul<{ menuOpen: boolean }>`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        width: 100%;
        height: 50vh;
        position: absolute;
        top: 80px;
        left: ${props => (props.menuOpen ? 0 : '-100%')};
        opacity: 1;
        transition: all 500ms ease;
        background: ${props => props.theme.body};
    }
`;

export const NavLink = styled(Link)<{ to: string; theme: Theme }>`
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

    @media screen and (max-width: 960px) {
        width: 100%;
        margin-bottom: 0.8rem;
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

    @media screen and (max-width: 960px) {
        right: 5rem;
    }
`;
