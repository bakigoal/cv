import React from 'react';
import {Container} from "@material-ui/core";

const About = ({userInfo}) => {
    return (
        <Container>
            <h3>{userInfo.firstName} {userInfo.lastName}</h3>
        </Container>
    );
};

export default About;