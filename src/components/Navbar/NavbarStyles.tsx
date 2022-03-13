import styled from 'styled-components';
import { Container, Button } from '../../styles/globalStyles';
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
    padding: 0 70px;
`;

export const NavLogo = styled.a`
    color: black;
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
    color: black;
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
