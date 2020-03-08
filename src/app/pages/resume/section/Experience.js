import React from 'react';
import SectionTitle from "../../../components/section-title/SectionTitle";

const Experience = ({experienceList, isRu}) => {

    let companies = experienceList.map((experience, i) => (
        <li key={i}>
            {experience.company}
        </li>
    ));

    return (
        <>
            <SectionTitle title={isRu ? 'Опыт работы' : 'Experience'}
                          quote={"Protons give an atom its identity, electrons its personality."}
                          author={"Bill Bryson, A short history of nearly everything"}/>
            <ul>
                {companies}
            </ul>
        </>
    );
};

export default Experience;