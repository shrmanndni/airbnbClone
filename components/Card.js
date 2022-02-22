import React from 'react';

const Card = ({img,title}) => {
  return (
  <div className=" flex  cursor-pointer transition transform-duration-150">
 
  <div className=" px-3">
      <img className=' hover:scale-110 rounded-2xl ' src={img} layout="fill" objectFit="cover"/>
      <h2 className='text-lg font-semibold py-2'>{title}</h2>
      </div>
     
  </div>
  )
};

export default Card;