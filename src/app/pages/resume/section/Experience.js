import React from 'react';
import Typography from "@material-ui/core/Typography";

const Experience = ({experienceList, isRu}) => {

    let companies = experienceList.map((experience, i) => (
        <li key={i}>
            {experience.company}
        </li>
    ));

    return (
        <>
            <Typography variant='h3' className="resume-section-title">
                {isRu ? 'Опыт работы' : 'Experience'}
            </Typography>
            <ul>
                {companies}
            </ul>
        </>
    );
};

export default Experience;