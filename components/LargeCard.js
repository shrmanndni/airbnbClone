import React from 'react';

const LargeCard = ({img,title,description,buttonText}) => {
  return(
       <div className="relative mt-11 ">
<div className="relative h-18 min-w-[300px]">
    <img  className="rounded-xl"src={img} layout="fill" objectFit="cover"/>
</div>
<div className="absolute top-12 lg:top-32 left-12 sm:left-12">
<h3 className='text-md font-semibold sm:md md:lg lg:text-4xl text-teal-400  '>{title}</h3>
    <p className="text-teal-400  light:text-slate-50 text-sm sm:xs md-lg lg-xl my-1 sm:my-1 md:my-2 lg:my-3 ">{description}</p>
    <button className='rounded-lg lg:rounded-xl sm:my-0.5 md:my-2 lg:my-3 bg-teal-400  px-1 py-0 lg:px-3 lg:py-2 w-[100px] lg:w-[150px] hover:shadow-white active:scale-90 transition-duration-150 hover:animate-pulse'>{buttonText}</button>
</div>
  </div>
  )
};

export default LargeCard;