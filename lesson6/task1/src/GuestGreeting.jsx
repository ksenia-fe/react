import React from 'react';

const emoji = String.fromCodePoint(0x1F680);

const GuestGreeting = () => {
    return (
        <h1>Hi stranger. Please login {emoji}</h1>
    )
}

export default GuestGreeting