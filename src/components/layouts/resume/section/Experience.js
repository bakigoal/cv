import React from 'react';

const Experience = ({ experienceList }) => {

    let companies = experienceList.map((experience, i)=>(
        <li key={i}>
            {experience.company}
        </li>
    ));

    return (
        <section className="resume-section resume-section-even" id="experience">
            <ul>
                {companies}
            </ul>
        </section>
    );
};

export default Experience;