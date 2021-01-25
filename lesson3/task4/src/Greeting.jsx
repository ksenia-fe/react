import React from 'react';

const Greeting = ({ firstName, lastName, birthDate }) => {
  const yearsOld = (birthDate) => {
    const res = new Date().getFullYear() - birthDate.getFullYear();

    return res;
  };

  return (
    <div className="greeting">
      {`My name is ${firstName} ${lastName}. I'm ${yearsOld(
        birthDate
      )} years old`}
    </div>
  );
};

export default Greeting;
