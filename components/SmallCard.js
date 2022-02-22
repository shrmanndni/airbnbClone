import React from 'react';

const SmallCard = ({img,distance,location}) => {
  return (
      <>
      
      <div className="flex my-2 mx-2 space-x-4 hover:scale-105 hover:bg-gray-200 transition transform-duration-150 ease out">
  <div className="relative w-18 h-16">
<img className="w-18 h-16 rounded-lg" src={img} layout="fill" objectFit="cover"/>
  </div>
  <div>
  <h4>{distance}</h4>
  <p>{location}</p>
  </div>
  </div>
  
  </>
  )
};

export default SmallCard;