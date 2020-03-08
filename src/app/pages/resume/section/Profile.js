import React from 'react';
import {Container} from "@material-ui/core";

const Profile = ({userInfo, isRu}) => {
    return (
        <Container>
            <h1>{isRu?'Профиль':'Profile'}</h1>
            <h3>{userInfo.firstName} {userInfo.lastName}</h3>
        </Container>
    );
};

export default Profile;