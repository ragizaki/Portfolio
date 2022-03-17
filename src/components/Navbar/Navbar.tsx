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
    const [changenav, setchangenav] = useState<boolean | undefined>(false);
    const theme = useContext(ThemeContext);
    let listener: any = null;

    useEffect(() => {
        listener = document.addEventListener('scroll', () => {
            setchangenav(window.scrollY < 100 ? false : true);
        });
        return () => {
            document.removeEventListener('scroll', listener);
        };
    }, [changenav]);

    const onBurgerClick = (): void => setIsBurgerOpen(prevOpen => !prevOpen);

    const scrollToTop = (): void => animateScroll.scrollToTop();
    return (
        <Nav changenav={changenav ? true : undefined}>
            <IconContext.Provider value={{ color: theme.toggleBorder }}>
                <NavContainer>
                    <NavLogo changenav={changenav ? true : undefined} onClick={scrollToTop}>
                        ZM.
                    </NavLogo>
                    <NavItems>
                        {navData.map(item => (
                            <NavItem
                                to={item.id}
                                smooth={true}
                                key={item.key}
                                changenav={changenav ? true : undefined}>
                                {item.value}
                            </NavItem>
                        ))}
                        <ResumeButton secondary={false} href={Resume} target='_blank' rel='noreffer'>
                            Open Resume
                        </ResumeButton>
                    </NavItems>
                    <ThemeToggle
                        type='checkbox'
                        onChange={toggleTheme}
                        checked={isDark}
                        changenav={changenav ? true : undefined}
                    />
                    <BurgerMenu onClick={onBurgerClick}>{isBurgerOpen ? <FaTimes /> : <FaBars />}</BurgerMenu>
                </NavContainer>
            </IconContext.Provider>
        </Nav>
    );
};

export default Navbar;
