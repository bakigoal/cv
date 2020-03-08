import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TranslateIcon from '@material-ui/icons/Translate';
import {Hidden, makeStyles} from "@material-ui/core";
import blueGrey from '@material-ui/core/colors/blueGrey';
import styleVariables from "../../../shared/style/variables.scss";
import './LanguageMenu.scss';

const useStyles = makeStyles(theme => ({
    menuPaper: {
        backgroundColor: blueGrey[900],
        width: '140px',
        color: styleVariables.lightColor,
    },
    buttonStyle: {
        color: styleVariables.lightColor
    }
}));


export default function LanguageMenu({isRu, onSelect}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const selectLanguage = lang => {
        handleClose();
        onSelect(lang);
    };

    return (
        <>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                    classes={{root: classes.buttonStyle}}>
                <TranslateIcon/>&nbsp;
                <Hidden smDown implementation="css">
                    {isRu ? "РУССКИЙ" : "ENGLISH"}
                </Hidden>
                <ExpandMoreIcon/>
            </Button>
            <Menu
                classes={{paper: classes.menuPaper}}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                variant="selectedMenu"
                onClose={handleClose}>
                <MenuItem onClick={() => selectLanguage("en")} selected={!isRu}>English</MenuItem>
                <MenuItem onClick={() => selectLanguage("ru")} selected={isRu}>Русский</MenuItem>
            </Menu>
        </>
    );
}