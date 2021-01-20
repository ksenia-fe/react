import React from 'react';

const Profile = (props) => {
    const formatted = new Intl.DateTimeFormat('en',
         { month: 'short',
           day: '2-digit',
           year: '2-digit',
           formatMatcher: 'basic'
        }).format(new Date(props.userData.birthDate)).replace(/,/g,'');
    const y = [...formatted];
    [y[0], y[1], y[2],y[3],y[4],y[5]] = [y[4],y[5],y[3], y[0], y[1],y[2]];

    return (
        <div className='profile'>
            <div className='profile__name'>{`${props.userData.firstName} ${props.userData.lastName}`}</div>
            <div className='profile__birth'>{`Was born ${y.join('')} in ${props.userData.birthPlace}`}</div>
        </div>
    )
}

export default Profile;