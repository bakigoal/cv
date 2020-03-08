import React from 'react';
import Typography from "@material-ui/core/Typography";

const Profile = ({userInfo, isRu}) => {
    return (
        <>
            <Typography variant='h3' className="resume-section-title">
                {isRu ? 'Профиль' : 'Profile'}
            </Typography>
            <Typography variant='subtitle1'>
                {userInfo.title}
            </Typography>
            <h3>{userInfo.firstName} {userInfo.lastName}</h3>
        </>
    );
};

export default Profile;