import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Container, Hidden, IconButton, Link, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Scrollspy from 'react-scrollspy';
import './NavBar.scss';
import styleVariables from '../../shared/style/variables.scss'
import LanguageMenu from "./LanguageMenu";

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        backgroundColor: styleVariables.primaryColor,
        color: styleVariables.lightColor,
        borderBottom: '3px solid ' + styleVariables.cyanColor,
        textAlign: 'center'
    }
}));

/**
 * Navigation bar
 *
 * @param sections array example:
 * [{path: "#about", name: "About"},{path: "#experience", name: "Experience"}]
 */
const NavBar = ({sections, isRu, onLangChange: updateLanguage}) => {
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

    const navigate = path => {
        if (path.startsWith('#')) {
            changeSection(path);
            return;
        }
        window.location.href = path;
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
            <Scrollspy items={sectionPaths} currentClassName='active-nav' className="scroll-spy">
                {sections.map(nav => (
                    <div key={nav.path} onClick={() => navigate(nav.path)}>
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
                <AppBar className="mobile-app-bar">
                    <Container>
                        <Toolbar disableGutters>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                size="medium"
                                onClick={handleDrawerToggle}>
                                <MenuIcon/>
                            </IconButton>
                            <div style={{flex: "1"}}/>
                            <LanguageMenu isRu={isRu} onSelect={updateLanguage}/>
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
                <AppBar className="desktop-app-bar">
                    <Container>
                        <Toolbar disableGutters>
                            <Scrollspy items={sectionPaths} currentClassName='active-nav' className="scroll-spy">
                                {sections.map((nav, i) => (
                                    <Link key={i}
                                          color="inherit"
                                          className="desktop-app-bar-link"
                                          onClick={() => navigate(nav.path)}>
                                        {nav.name}
                                    </Link>
                                ))}
                            </Scrollspy>
                            <div style={{flex: "1"}}/>
                            <LanguageMenu isRu={isRu} onSelect={updateLanguage}/>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Hidden>
        </header>
    );
};

export default NavBar;