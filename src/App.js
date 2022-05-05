import { useState } from 'react';
import { ButtonStar, Footer, ThanksCard } from './components/inidex';
import iconStar from './assets/icon-star.svg';

const App = () => {
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);

  const button = (i) => {
    return (
      <button
        type='button'
        className='grid place-content-center rounded-full bg-DB w-11 h-11 text-sm 
          text-Light_Grey hover:text-white focus:text-white hover:bg-Orange focus:bg-Medium_Grey'
        onClick={() => setValue(i)}
      >
        {i}
      </button>
    );
  };

  return (
    <div className='bg-VD_Blue h-screen grid place-content-center text-white'>
      {rating === 0 ? (
        <div className='sm:max-w-sm sm:mx-auto mx-6'>
          <div className='bg-gradient-radial from-[#232a34] to-[#181e27] rounded-cr sm:rounded-crsm'>
            <div className='sm:p-7 p-6'>
              <ButtonStar button={<img alt='star-icon' src={iconStar} />} />
              <div className='mt-6 sm:mt-8 text-2xl'>
                <h1>How did we do?</h1>
              </div>
              <div className='mt-5 text-sm text-Li text-Light_Grey sm:mt-3'>
                <p>
                  Please let us know how we did with your support request. All
                  feedback is appreciated to help us improve our offering!
                </p>
              </div>
              <div className='sm:box-border sm:w-80'>
                <div className='mt-5 flex justify-between'>
                  {button(1)}
                  {button(2)}
                  {button(3)}
                  {button(4)}
                  {button(5)}
                </div>
                <div className='mb-1 mt-6 sm:mt-7 flex'>
                  <button
                    type='button'
                    className='bg-Orange place-content-center grid 
                    grow rounded-full bg-DB w-11 h-11 text-sm uppercase 
                    tracking-widest hover:text-Orange hover:bg-white'
                    onClick={() => setRating(value)}
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ThanksCard rating={rating} />
      )}
      <Footer />
    </div>
  );
};

export default App;
