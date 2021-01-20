import React from 'react';
import moment from 'moment';

const Profile = (props) => {
    const date = moment(new Date(props.userData.birthDate)).format('MMM DD YY');

    return (
        <div className='profile'>
            <div className='profile__name'>{`${props.userData.firstName} ${props.userData.lastName}`}</div>
            <div className='profile__birth'>{`Was born ${date} in ${props.userData.birthPlace}`}</div>
        </div>
    )
}

export default Profile;