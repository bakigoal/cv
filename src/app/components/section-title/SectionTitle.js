import Typography from "@material-ui/core/Typography";
import React from "react";
import './SectionTitle.scss';

const SectionTitle = ({title, subtitle, quote, author}) => {

    return (
        <div className="resume-section-title">
            <Typography variant='h3'>
                {title}
            </Typography>
            <Typography variant='h6' hidden={!subtitle}>
                {subtitle}
            </Typography>
            <Typography variant='h6' hidden={!quote}>
                “{quote}”
            </Typography>
            <Typography variant='h6' hidden={!author}>
                - {author}
            </Typography>
            <hr/>
        </div>
    );
};

export default SectionTitle;
