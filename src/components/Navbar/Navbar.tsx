import { useState } from 'react';
import { animateScroll } from 'react-scroll';
import { Nav, NavContainer, NavLogo, NavItems, NavItem, BurgerMenu, ResumeButton } from './NavbarStyles';
import { navData } from '../../data';
import Resume from '../../assets/Resume.pdf';

// Icon Configuration
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import theme from '../../styles/theme';

type Props = {};

const Navbar = (): JSX.Element => {
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

    const onBurgerClick = (): void => setIsBurgerOpen(prevOpen => !prevOpen);

    const scrollToTop = (): void => animateScroll.scrollToTop();
    return (
        <Nav>
            <IconContext.Provider value={{ color: theme.white }}>
                <NavContainer>
                    <NavLogo onClick={scrollToTop}>ZM.</NavLogo>
                    <NavItems>
                        {navData.map(item => (
                            <NavItem to={item.id} key={item.key}>
                                {item.value}
                            </NavItem>
                        ))}
                        <ResumeButton secondary={false} href={Resume} target='_blank' rel='noreffer'>
                            Open Resume
                        </ResumeButton>
                    </NavItems>
                    <BurgerMenu onClick={onBurgerClick}>{isBurgerOpen ? <FaTimes /> : <FaBars />}</BurgerMenu>
                </NavContainer>
            </IconContext.Provider>
        </Nav>
    );
};

export default Navbar;
