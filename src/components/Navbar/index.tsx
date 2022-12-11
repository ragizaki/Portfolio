import { useState, useContext } from "react";
import { animateScroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavLink,
  NavMenu,
  MenuIcon,
  ResumeButton,
  ThemeButton,
} from "./styles";

import { navData } from "../../data";
import Resume from "../../assets/Resume.pdf";

// Icon Configuration
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { ThemeContext } from "styled-components";

interface Props {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: Props): JSX.Element => {
  const [menuOpen, setmenuOpen] = useState<boolean>(false);
  const theme = useContext(ThemeContext);

  const handleMenuClick = (): void => setmenuOpen((prevOpen) => !prevOpen);

  const closeMenu = (): void => setmenuOpen(false);

  const handleLogoClick = (): void => {
    animateScroll.scrollToTop();
    closeMenu();
  };

  return (
    <Nav isDark={isDark}>
      <IconContext.Provider value={{ color: theme.text }}>
        <NavContainer>
          <NavLogo onClick={handleLogoClick}>{navData.navLogo}</NavLogo>
          <NavMenu menuOpen={menuOpen} onClick={handleMenuClick}>
            {navData.navItems.map((item) => (
              <NavLink
                to={item.id}
                href={item.id}
                smooth={true}
                duration={1000}
                offset={-100}
                key={item.key}
                onClick={closeMenu}
              >
                {item.value}
              </NavLink>
            ))}
            <ResumeButton
              secondary={false}
              href={Resume}
              target="_blank"
              rel="noreffer"
            >
              Open Resume
            </ResumeButton>
          </NavMenu>
          <label htmlFor="themeToggle"></label>
          <ThemeButton onClick={toggleTheme}>
            {isDark ? <BsSun /> : <BiMoon />}
          </ThemeButton>
          <MenuIcon onClick={handleMenuClick}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </MenuIcon>
        </NavContainer>
      </IconContext.Provider>
    </Nav>
  );
};

export default Navbar;
