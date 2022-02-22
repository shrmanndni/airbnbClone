import React from 'react';

const Banner= () => {
  return (
      
  <div className=" relative bg-black lg:h-[800px]" >
<img className="object-fill rounded shadow-xl p-20 lg:h-[800px] md:[800px] sm:[700px] lg:w-[1500px] md:w-[1500px] sm:[500px]" src="https://a0.muscache.com/im/pictures/fe7217ff-0b24-438d-880d-b94722c75bf5.jpg" layout="fill" objectFit="cover"/>
  
  <div className=" absolute top-2/3 w-full my-9 text-center">
  <p className="text-white lg:text-5xl font-semibold md:xl sm:md animate-bounce">Not sure where to go?Perfect</p>
  <button className="bg-white  rounded-full my-1 px-3  lg:my-8 lg:px-8 lg:py-3 md:my-5 md:px-5 md:py-3 sm:my-4 sm:px-5 sm:p-2 hover:shadow-white active:scale-90 transition-duration-150"><p className="text-fuchsia-700 font-bold lg:text-lg md:text-md sm:text-xs font-sans" >I'm flexible</p></button>
  </div>

  </div>
  
  )
};

export default Banner;