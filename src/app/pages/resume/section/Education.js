import React from 'react';
import SectionTitle from "../../../components/section-title/SectionTitle";

const Education = ({isRu}) => {
    return (
        <>
            <SectionTitle title={isRu ? 'Образование' : 'Education'}
                          quote={"Protons give an atom its identity, electrons its personality."}
                          author={"Bill Bryson, A short history of nearly everything"}/>

        </>
    );
};

export default Education;