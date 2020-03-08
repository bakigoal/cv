import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { Toolbar, Container } from '@material-ui/core';
import Header from './layouts/header/Header';
import Resume from './layouts/resume/Resume';
import navigation from '../static/navigation.json';

function App() {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1B242F'
      },
      secondary: {
        main: '#e31b6d'
      }
    },
    typography: {
      fontSize: 16,
    }
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header navigation={navigation}/>
      <Container>
        <Resume />
      </Container>
    </ThemeProvider>
  );
}

export default App;