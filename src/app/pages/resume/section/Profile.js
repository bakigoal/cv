import React from 'react';
import Typography from "@material-ui/core/Typography";

const Profile = ({userInfo, isRu}) => {
    return (
        <>
            <Typography variant='h3'>
                {isRu ? 'Профиль' : 'Profile'}
            </Typography>
            <h3>{userInfo.firstName} {userInfo.lastName}</h3>
        </>
    );
};

export default Profile;