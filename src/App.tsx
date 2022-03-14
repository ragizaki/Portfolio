import { useState, useCallback, useEffect } from 'react';

import GlobalStyles from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const THEME: { key: string; light: string; dark: string } = {
    key: 'theme',
    light: 'light',
    dark: 'dark',
};

const App = (): JSX.Element => {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage) {
            const userTheme = localStorage.getItem(THEME.key);
            if (userTheme === THEME.dark) {
                setIsDark(true);
            }
        }
    }, []);

    window.addEventListener('beforeunload', () => {
        localStorage.setItem(THEME.key, isDark ? THEME.dark : THEME.light);
    });

    const toggleTheme = useCallback(() => setIsDark(prevTheme => !prevTheme), [setIsDark]);

    return (
        <div>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyles />
                <Navbar toggleTheme={toggleTheme} isDark={isDark} />
                <Home />
            </ThemeProvider>
        </div>
    );
};

export default App;
