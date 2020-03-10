import React from 'react';
import SectionTitle from "../../../components/section-title/SectionTitle";
import {Box} from "@material-ui/core";
import ExperienceItem from "../../../components/experience/ExperienceItem";

const Experience = ({experienceList, isRu}) => {

    return (
        <>
            <SectionTitle title={isRu ? 'Опыт работы' : 'Experience'}
                          quote={"Protons give an atom its identity, electrons its personality."}
                          author={"Bill Bryson, A short history of nearly everything"}/>
            <Box className="resume-section-experience-container">
                {experienceList.map((experience, i) => (
                    <ExperienceItem experience={experience} key={i}/>
                ))}
            </Box>
        </>
    );
};

export default Experience;