import React from 'react';

const ButtonStar = ({ button }) => {
  return (
    <>
      <div className='shadow-md shadow-black/50 grid place-content-center rounded-full bg-DB w-11 h-11 '>
        <div>{button}</div>
      </div>
    </>
  );
};

export default ButtonStar;
