import React from 'react';
import SectionTitle from "../../../components/section-title/SectionTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";
import avatarUrl from '../../../../static/images/avatar.png';
import styleVariables from "../../../../shared/style/variables.scss";

const useStyles = makeStyles(theme => ({
    avatarLarge: {
        width: theme.spacing(32),
        height: theme.spacing(32),
        border: '0.5rem solid ' + styleVariables.avatarBorderColor
    },
    avatarSmall: {
        width: theme.spacing(24),
        height: theme.spacing(24),
        border: '0.5rem solid ' + styleVariables.avatarBorderColor
    }
}));

const Profile = ({userInfo, isRu}) => {
    const classes = useStyles();
    const getFullYears = dateOfBirth => {
        return isRu ? "32 года" : "32 years";
    };

    return (
        <>
            <SectionTitle title={isRu ? 'Профиль' : 'Profile'}
                          subtitle={userInfo.title}/>

            <Grid container direction="row" justify="center" alignItems="flex-start"
                  className='resume-section-profile-container'>
                <Grid container item xs={12} md={4} direction="column">
                    <Typography variant='h3'>
                        {isRu ? "Обо мне" : "About me"}
                    </Typography>
                    <Typography variant='body1'>
                        {userInfo.about}
                    </Typography>
                </Grid>
                <Grid container item xs={12} md={4} direction="column" justify="flex-start" alignItems="center">
                    <Hidden smDown implementation="css">
                        <Avatar alt="Ilmir" src={avatarUrl} className={classes.avatarLarge}/>
                    </Hidden>
                    <Hidden mdUp implementation="css" className='profile-avatar'>
                        <Avatar alt="Ilmir" src={avatarUrl} className={classes.avatarSmall}/>
                    </Hidden>
                </Grid>
                <Grid container item xs={12} md={4} direction="column">
                    <Typography variant='h3'>
                        {isRu ? "Детали" : "Details"}
                    </Typography>
                    <Typography variant='h6'>
                        {isRu ? "Имя" : "Name"}:
                    </Typography>
                    <Typography variant='body1'>
                        {userInfo.firstName + ' ' + userInfo.lastName}
                    </Typography>
                    <Typography variant='h6'>
                        {isRu ? "Возраст" : "Age"}:
                    </Typography>
                    <Typography variant='body1'>
                        {getFullYears(userInfo.dob)}
                    </Typography>
                    <Typography variant='h6'>
                        {isRu ? "Местонахождение" : "Location"}:
                    </Typography>
                    <Typography variant='body1'>
                        {userInfo.addressText}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Profile;