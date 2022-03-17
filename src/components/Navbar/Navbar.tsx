import { useState, useContext, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import {
    Nav,
    NavContainer,
    NavLogo,
    NavItems,
    NavItem,
    BurgerMenu,
    ResumeButton,
    ThemeToggle,
} from './NavbarStyles';
import { navData } from '../../data';
import Resume from '../../assets/Resume.pdf';

// Icon Configuration
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ThemeContext } from 'styled-components';

interface Props {
    isDark: boolean;
    toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: Props): JSX.Element => {
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
    const [changeNav, setChangeNav] = useState<boolean>(false);
    const theme = useContext(ThemeContext);
    let listener: any = null;

    useEffect(() => {
        listener = document.addEventListener('scroll', () => {
            setChangeNav(window.scrollY < 100 ? false : true);
        });
        return () => {
            document.removeEventListener('scroll', listener);
        };
    }, [changeNav]);

    const onBurgerClick = (): void => setIsBurgerOpen(prevOpen => !prevOpen);

    const scrollToTop = (): void => animateScroll.scrollToTop();
    return (
        <Nav changeNav={changeNav}>
            <IconContext.Provider value={{ color: theme.toggleBorder }}>
                <NavContainer>
                    <NavLogo changeNav={changeNav} onClick={scrollToTop}>
                        ZM.
                    </NavLogo>
                    <NavItems>
                        {navData.map(item => (
                            <NavItem to={item.id} smooth={true} key={item.key} changeNav={changeNav}>
                                {item.value}
                            </NavItem>
                        ))}
                        <ResumeButton secondary={false} href={Resume} target='_blank' rel='noreffer'>
                            Open Resume
                        </ResumeButton>
                    </NavItems>
                    <ThemeToggle type='checkbox' onChange={toggleTheme} checked={isDark} changeNav={changeNav} />
                    <BurgerMenu onClick={onBurgerClick}>{isBurgerOpen ? <FaTimes /> : <FaBars />}</BurgerMenu>
                </NavContainer>
            </IconContext.Provider>
        </Nav>
    );
};

export default Navbar;
