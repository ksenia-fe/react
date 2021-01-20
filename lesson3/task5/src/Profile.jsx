import React from 'react';

const Profile = ({firstName, lastName, birthDate, birthPlace}) => {
    const formatter = new Intl.DateTimeFormat('en',
         { month: 'short',
           day: '2-digit',
           year: '2-digit',
           formatMatcher: 'basic'
        }).format(new Date(birthDate)).replace(/,/g,'');
    const y = [...formatter];
    [y[0], y[1], y[2],y[3],y[4],y[5]] = [y[4],y[5],y[3], y[0], y[1],y[2]];
    console.log(y);
        // Jan_17_91
    return (
        <div className='profile'>
            <div className='profile__name'>{`${firstName} ${lastName}`}</div>
            <div className='profile__name'>{`${y.join('')} ${birthPlace}`}</div>
        </div>
    )
}

export default Profile;