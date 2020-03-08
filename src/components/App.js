import React from 'react';
import Resume from './pages/resume/Resume';
import Portfolio from "./pages/portfolio/Portfolio";
import {Route as RouterRoute, Switch as RouterSwitch} from "react-router-dom";

function App() {

    return (
        <RouterSwitch>
            <RouterRoute exact path='/portfolio' component={Portfolio}/>
            <RouterRoute exact path='/ru' component={Resume}/>
            <RouterRoute exact path='/' component={Resume}/>
        </RouterSwitch>
    );
}

export default App;