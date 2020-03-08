import React from 'react';
import Resume from './pages/resume/Resume';
import {Route as RouterRoute, Switch as RouterSwitch} from "react-router-dom";

function App() {

    return (
        <RouterSwitch>
            <RouterRoute exact path='/' component={Resume}/>
        </RouterSwitch>
    );
}

export default App;