import React from 'react';

const emoji = String.fromCodePoint(0x1F60E)

const UserGreeting = () => {
    return (
        <h1>Hi User {emoji}</h1>
    )
}

export default UserGreeting