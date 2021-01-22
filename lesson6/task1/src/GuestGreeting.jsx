import React from 'react';

const emoji = String.fromCodePoint(0x270C);
const s = String.fromCodePoint(0x1F680);
const GuestGreeting = () => {
    return (
        <h1>Hi Stranger {emoji}. Please login {s}</h1>
    )
}

export default GuestGreeting