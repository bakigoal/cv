import React from 'react';
import SectionTitle from "../../../components/section-title/SectionTitle";

const Contact = ({isRu}) => {
    return (
        <>
            <SectionTitle title={isRu ? 'Контакты' : 'Contact'}
                          quote={"If I had asked people what they wanted, they would have said faster horses."}
                          author={"Henry Ford"}/>
        </>
    );
};

export default Contact;