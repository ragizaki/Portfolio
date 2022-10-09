import { useState, useCallback, useEffect } from 'react';

// comment

import GlobalStyles, { Container } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';

// Spotify API
import { getTopTracks } from './lib/spotify';

const THEME: { key: string; light: string; dark: string } = {
    key: 'theme',
    light: 'light',
    dark: 'dark',
};

const App = (): JSX.Element => {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [topSongs, setTopSongs] = useState([]);

    useEffect(() => {
        if (localStorage) {
            const userTheme: string | null = localStorage.getItem(THEME.key);
            if (userTheme && userTheme === THEME.dark) {
                setIsDark(true);
            }
        }
    }, []);

    useEffect(() => {
        (async () => {
            const res = await getTopTracks();
            const { items } = await res.json();
            setTopSongs(items);
        })()
    }, [])

    window.addEventListener('beforeunload', () => {
        localStorage.setItem(THEME.key, isDark ? THEME.dark : THEME.light);
    });

    const toggleTheme = useCallback(() => {
        setIsDark(prevTheme => !prevTheme);
    }, [setIsDark]);
    
    return (
        // @ts-ignore
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            {
                // @ts-ignore
                <GlobalStyles />
            }
            <Navbar toggleTheme={toggleTheme} isDark={isDark} />
            <Container>
                <Home song={topSongs[0]} />
                <Experience />
            </Container>
        </ThemeProvider>
    );
};

export default App;
