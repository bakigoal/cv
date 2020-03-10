import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import {Hidden, Link} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import './ExperienceItem.scss';

const ExperienceItem = ({experience}) => {
    return (
        <Grid container direction="row" justify="center" alignItems="flex-start" className='experience-item'>
            <Grid container item xs={12} md={4} direction="column">
                <Typography variant='h5'>
                    {experience.company}
                </Typography>
                <Typography variant='body1'>
                    {experience.start_date + " - " + experience.end_date}
                </Typography>
            </Grid>
            <Hidden mdDown>
                <Grid container item md={1}/>
            </Hidden>
            <Grid container item xs={12} md={7} direction="column">
                <Typography variant='h6'>
                    {experience.job_title}
                </Typography>
                <Typography variant='body1'>
                    {experience.responsibilities}
                </Typography>
                <Box>
                    <LocationOnIcon color="secondary" fontSize="small"/>
                    <Typography color="secondary" display="inline">{experience.city}</Typography>
                    {experience.site ? (
                        <>
                            <Typography color="textSecondary" display="inline"> | </Typography>
                            <LinkIcon color="secondary" fontSize="small"/>
                            <Link color="secondary" display="inline"
                                  href={experience.site}
                                  target="_blank"
                                  rel="noopener">{experience.site}</Link>
                        </>
                    ) : ''}
                </Box>
            </Grid>
        </Grid>
    );
};

export default ExperienceItem;