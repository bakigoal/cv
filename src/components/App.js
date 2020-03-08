import React from 'react';
import Resume from './layouts/resume/Resume';
import Portfolio from "./layouts/portfolio/Portfolio";
import {Route as RouterRoute, Switch as RouterSwitch} from "react-router-dom";

function App() {

    return (
        <RouterSwitch>
            <RouterRoute exact path='/' component={Resume}/>
            <RouterRoute exact path='/portfolio' component={Portfolio}/>
        </RouterSwitch>
    );
}

export default App;