import React from 'react';

import GlobalStyles from './globalStyles';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

type Props = {};

const App = (props: Props) => {
    return (
        <div>
            <GlobalStyles />
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
