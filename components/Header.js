import React from 'react';

const Header = () => {
  return (
    <header className="grid  grid-cols-3 shadow-white shadow-md bg-white sticky z-50 top-0 p-5 md:px-10 ">
   <div className="relative flex items-center h-25 w-40 cursor-pointer">
   
      <img
      className=" hidden md:block lg:block " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png" 
      layout="fill"
       objectFit="contain"
        objectPosition="left"/>
        <img className=" md:hidden lg:hidden sm:block h-[70px] w-[70px]" src="https://logodownload.org/wp-content/uploads/2016/10/airbnb-logo-1-1.png" 
      layout="fill"
       objectFit="contain"
        objectPosition="left"/>
  </div>

  <div className='flex  pl-4 justify-between items-center rounded-full  md:border-2 shadow-white shadow-md'>
      <input  placeholder="Search" className=" flex overflow bg-transparent  py-5 w-[50px]  sm:w-[50px] md:w-[100px] lg:w-[200px] overflow-visible flex-grow sm:h-3 outline-none" type="text" />
      <svg className=" hiddden px-0 md:flex mr-5 shadow-white shadow-xl bg-red-400 h-8 w-[30px]  m-4 lg:m-4 md:m-3 sm:m-3 text-white rounded-full cursor-pointer"xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
  </div>

  <div className='  flex items-center justify-end space-x-4 '>

      <p className=" hidden md:inline">Become a host</p>

      <svg className="hover:animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>

<div className="flex items-center bg-white rounded-full p-3 border-2 border-gray shadow-white hover:shadow-xl">

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
</svg>

</div>
</div>
</header>
  )
}

export default Header;