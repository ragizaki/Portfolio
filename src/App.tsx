import { useState, useCallback, useEffect } from 'react';

import GlobalStyles, { Container } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { getMostRecentSong, Song } from './services/spotify';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';

const THEME: { key: string; light: string; dark: string } = {
    key: 'theme',
    light: 'light',
    dark: 'dark',
};

const App = (): JSX.Element => {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [song, setSong] = useState<Song | null>(null);

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
            try {
                const song: Song = await getMostRecentSong();
                setSong(song);
            } catch (error) {
                console.log('HWAT GOOD');
                console.error(error);
            }
        })();
    }, []);

    window.addEventListener('beforeunload', () => {
        localStorage.setItem(THEME.key, isDark ? THEME.dark : THEME.light);
    });

    const toggleTheme = useCallback(() => {
        setIsDark(prevTheme => !prevTheme);
    }, [setIsDark]);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Navbar toggleTheme={toggleTheme} isDark={isDark} />
            <Container>
                <Home song={song} />
                <Experience />
            </Container>
        </ThemeProvider>
    );
};

export default App;
