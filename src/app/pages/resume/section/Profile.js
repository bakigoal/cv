import React from 'react';
import SectionTitle from "../../../components/section-title/SectionTitle";

const Profile = ({userInfo, isRu}) => {
    return (
        <>
            <SectionTitle title={isRu ? 'Профиль' : 'Profile'}
                          subtitle={userInfo.title}/>
            <h3>{userInfo.firstName} {userInfo.lastName}</h3>
        </>
    );
};

export default Profile;