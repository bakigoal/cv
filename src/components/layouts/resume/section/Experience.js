import React from 'react';
import {Container} from "@material-ui/core";

const Experience = ({experienceList}) => {

    let companies = experienceList.map((experience, i) => (
        <li key={i}>
            {experience.company}
        </li>
    ));

    return (
        <Container>
            <ul>
                {companies}
            </ul>
        </Container>
    );
};

export default Experience;