import React from 'react';

import GlobalStyles from './globalStyles';

// Components
import Navbar from './components/Navbar/Navbar';

type Props = {};

const App = (props: Props) => {
    return (
        <div>
            <GlobalStyles />
            <Navbar />
        </div>
    );
};

export default App;
