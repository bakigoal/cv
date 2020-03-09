import Typography from "@material-ui/core/Typography";
import React from "react";
import './SectionTitle.scss';
import Divider from "@material-ui/core/Divider";

const SectionTitle = ({title, subtitle, quote, author}) => {

    return (
        <div className="resume-section-title">
            <Typography variant='h2'>
                {title}
            </Typography>
            <Typography variant='subtitle1' hidden={!subtitle}>
                {subtitle}
            </Typography>
            <Typography variant='subtitle1' hidden={!quote}>
                “{quote}”
            </Typography>
            <Typography variant='subtitle1' hidden={!author}>
                - {author}
            </Typography>
            <Divider/>
        </div>
    );
};

export default SectionTitle;
