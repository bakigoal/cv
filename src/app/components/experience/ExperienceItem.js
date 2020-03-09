import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ExperienceItem = ({experience}) => {
    return (
        <Grid container direction="row" justify="center" alignItems="flex-start">
            <Grid container item xs={12} md={4} direction="column">
                <Typography variant='h5'>
                    {experience.company}
                </Typography>
                <Typography variant='body1'>
                    {experience.start_date  + " - " + experience.end_date}
                </Typography>
            </Grid>
            <Grid container item xs={12} md={8} direction="column">
                <Typography variant='h6'>
                    {experience.job_title}
                </Typography>
                <Typography variant='body1'>
                    {experience.responsibilities}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ExperienceItem;