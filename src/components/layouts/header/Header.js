import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Container, Hidden, IconButton, Link, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Scrollspy from 'react-scrollspy';
import './Header.css';

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        backgroundColor: '#1B242F',
        color: '#fafafa',
        borderBottom: '3px solid #04c2c9',
        textAlign: 'center'
    }
}));

const styles = {
    desktopAppBar: {
        borderBottom: '3px solid #04c2c9',
        height: '4rem'
    },
    desktopAppBarLink: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        paddingRight: '2rem',
        cursor: 'pointer'
    },
    scrollSpy: {
        padding: 0
    }
};

const Header = ({ sections}) => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        drawerVisible: false
    });

    const handleDrawerToggle = () => {
        setState({...state, drawerVisible: !state.drawerVisible});
    };

    const hideDrawer = () => {
        setState({...state, drawerVisible: false});
    };

    const changeSection = path => {
        const anchor = document.querySelector(path);
        if (anchor) {
            window.scrollTo({
                top: anchor.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        }
    };

    const sectionPaths = sections.map(nav => nav.path.replace('#', ''));

    const drawer = () => (
        <div role="presentation" onClick={hideDrawer}>
            <Scrollspy items={sectionPaths} currentClassName='active-nav' style={styles.scrollSpy}>
                {sections.map(nav => (
                    <div key={nav.path} onClick={() => changeSection(nav.path)}>
                        <Button color="inherit">{nav.name}</Button>
                    </div>
                ))}
            </Scrollspy>
        </div>
    );

    return (
        <header>
            {/* mobile */}
            <Hidden smUp implementation="css">
                <AppBar>
                    <Container>
                        <Toolbar>
                            <div style={{flex: "1"}}/>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                size="medium"
                                onClick={handleDrawerToggle}>
                                <MenuIcon/>
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Drawer anchor="top" open={state.drawerVisible} onClose={hideDrawer} variant="temporary"
                        classes={{paper: classes.drawerPaper}}>
                    {drawer()}
                </Drawer>
            </Hidden>

            {/* desktop */}
            <Hidden xsDown implementation="css">
                <AppBar className="header-app-bar" style={styles.desktopAppBar}>
                    <Container>
                        <Toolbar>
                            <Scrollspy items={sectionPaths} currentClassName='active-nav'>
                                {sections.map((nav, i) => (
                                    <Link key={i}
                                          color="inherit"
                                          style={styles.desktopAppBarLink}
                                          onClick={() => changeSection(nav.path)}>
                                        {nav.name}
                                    </Link>
                                ))}
                            </Scrollspy>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Hidden>
        </header>
    );
};

export default Header;