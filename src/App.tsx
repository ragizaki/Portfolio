import React from 'react';

import GlobalStyles from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

type Props = {};

const App = (props: Props) => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Home />
            </ThemeProvider>
        </div>
    );
};

export default App;
