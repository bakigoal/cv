import React from 'react';

const About = ({ userInfo }) => {
    return (
        <section className="resume-section" id="about">
            <h3>{userInfo.firstName} {userInfo.lastName}</h3>
        </section>
    );
}

export default About;