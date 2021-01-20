import React from 'react';

const Greeting = ({firstName,lastName,birthDate}) => {

    const yearsOld = year => {
        const now = new Date().getFullYear();
        return now - year;
        
    }

    return (
        <div className="greeting">
            {`My name is ${firstName} ${lastName}. I'm ${yearsOld(birthDate)} years old`}
        </div>
    )
}

export default Greeting;