import thankYouIl from '../assets/illustration-thank-you.svg';

const ThanksCard = ({ rating }) => {
  return (
    <div className='sm:max-w-sm sm:mx-auto mx-6'>
      <div className='bg-gradient-radial from-[#232a34] to-[#181e27] rounded-cr sm:rounded-crsm'>
        <div className='sm:p-8 p-6'>
          <div className='grid justify-items-center mt-3 sm:mt-2'>
            <div className='box-border w-36 h-24'>
              <img className='bg-cover' alt='star-icon' src={thankYouIl} />
            </div>
            <div className='w-full mt-6 w-168 grid justify-items-center'>
              <div
                className='grid place-content-center md:mt-2
                  box-border w-40 sm:w-48 h-8 text-sm text-Orange bg-DB rounded-crrating'
              >
                {`You selected ${rating} out of 5`}
              </div>
            </div>
          </div>
          <div className='mt-6 sm:mt-8 text-2xl sm:text-3xl grid justify-items-center'>
            <h3>Thank you!</h3>
          </div>
          <div className='mt-5 sm:mt-3 mb-3 text-sm text-Li text-Light_Grey text-center'>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksCard;
