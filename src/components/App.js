import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Header from './layouts/header/Header';
import Resume from './layouts/resume/Resume';
import navigation from '../static/navigation.json';
import styleVariables from '../shared/style/variables.scss';

function App() {
    console.log(styleVariables);
    let theme = createMuiTheme({
        palette: {
            primary: {
                main: styleVariables.primaryColor
            },
            secondary: {
                main: styleVariables.secondaryColor
            }
        },
        typography: {
            fontSize: 16,
        }
    });
    theme = responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header sections={navigation.sections}/>
            <Container>
                <Resume/>
            </Container>
        </ThemeProvider>
    );
}

export default App;