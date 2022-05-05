import React from 'react';

const Footer = () => {
  return (
    <div className='absolute bottom-10 mt-20 text-Medium_Grey w-screen grid justify-items-center'>
      <div className='md:text-sm text-xs'>
        <p>
          Challenge by&nbsp;
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            className='text-Light_Grey'
          >
            Frontend Mentor
          </a>
          . Coded by <span className='text-Orange'>Jaime Cortés</span> .
        </p>
      </div>
    </div>
  );
};

export default Footer;
