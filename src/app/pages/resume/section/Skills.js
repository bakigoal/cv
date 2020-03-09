import React from 'react';
import SectionTitle from "../../../components/section-title/SectionTitle";

const Skills = ({isRu}) => {
    return (
        <>
            <SectionTitle title={isRu ? 'Навыки' : 'Skills'}
                          quote={"Life without knowledge is death in disguise."}
                          author={"Talib Kweli"}/>
        </>
    );
};

export default Skills;