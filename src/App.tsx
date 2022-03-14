import { useState, useCallback } from 'react';

import GlobalStyles from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = (): JSX.Element => {
    const [isDark, setIsDark] = useState<boolean>(false);

    const toggleTheme = useCallback(() => setIsDark(prevTheme => !prevTheme), [setIsDark]);
    return (
        <div>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyles />
                <Navbar toggleTheme={toggleTheme} />
                <Home />
            </ThemeProvider>
        </div>
    );
};

export default App;
