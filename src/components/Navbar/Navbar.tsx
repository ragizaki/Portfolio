import React, { useState } from 'react';
import { animateScroll } from 'react-scroll';
import { Nav, NavContainer, NavLogo, NavItems, NavItem, ResumeBtn, BurgerMenu } from './NavbarStyles';
import { NavData } from '../../data';
import Resume from '../../assets/Resume.pdf';

// Icon Configuration
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

type Props = {};

const Navbar = (): JSX.Element => {
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

    const onBurgerClick = (): void => setIsBurgerOpen(prevOpen => !prevOpen);

    const scrollToTop = (): void => animateScroll.scrollToTop();
    return (
        <Nav>
            <IconContext.Provider value={{ color: 'white' }}>
                <NavContainer>
                    <NavLogo onClick={scrollToTop}>ZM.</NavLogo>
                    <NavItems>
                        {NavData.map(item => (
                            <NavItem id={item.id} key={item.key}>
                                {item.value}
                            </NavItem>
                        ))}
                    </NavItems>
                    <ResumeBtn href={Resume} target='_blank' rel='noreffer'>
                        Open Resume
                    </ResumeBtn>
                    <BurgerMenu onClick={onBurgerClick}>{isBurgerOpen ? <FaTimes /> : <FaBars />}</BurgerMenu>
                </NavContainer>
            </IconContext.Provider>
        </Nav>
    );
};

export default Navbar;
