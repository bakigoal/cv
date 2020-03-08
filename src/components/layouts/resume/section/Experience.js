import React from 'react';

const Experience = ({experienceList}) => {

    let companies = experienceList.map((experience, i) => (
        <li key={i}>
            {experience.company}
        </li>
    ));

    return (
        <ul>
            {companies}
        </ul>
    );
};

export default Experience;