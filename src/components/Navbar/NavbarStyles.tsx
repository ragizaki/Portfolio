import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 100;
`;

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled.a`
    color: black;
    justify-self: flex-start;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
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

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease-in;
        background: #101522;
    }
`;

export const NavItem = styled(Link)`
    color: black;
    text-transform: capitalize;
    margin-right: 30px;
    cursor: pointer;
    transition: all 200ms ease-in;
    font-size: 1.1rem;
    font-weight: 500;

    &:hover {
        opacity: 0.6;
    }
`;

export const ResumeBtn = styled.a`
    background-color: #0070f3;
    border-radius: 20px;
    box-shadow: 0 4px 14px rgb(0, 118, 255, 0.39);
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    padding: 7px 15px;
    font-size: 1rem;
    transition: all 200ms ease;

    &:hover {
        background-color: lightblue;
        background: rgba(0, 118, 240, 0.9);
        box-shadow: 0 6px 20px rgb(0, 118, 255, 0.23);
    }
`;
