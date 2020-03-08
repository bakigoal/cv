import React from 'react';

const About = ({userInfo}) => {
    return (
        <h3>{userInfo.firstName} {userInfo.lastName}</h3>
    );
};

export default About;