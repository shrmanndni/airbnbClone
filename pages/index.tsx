import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import SmallCard from "../components/SmallCard";
import LargeCard from "../components/LargeCard";
import PropTypes from 'prop-types';
import Card from'../components/Card'; //{{cardsData}:{[key:string]:any},{exploreData}:{[key:string]:any}}



export default function Home({exploreData,cardsData}:any){
  

  
  return (
    <div className="dark:bg-slate-50">
      <Head>
        <title>Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes &#38; ....</title>
        <link rel="icon" href="/1298722_airbnb_icon.ico" />
      </Head>
<Header/>
<Banner/>
<main className="max-w-7xl mx-auto  bg-slate-100">
  <div className="shadow-xl rounded-xl "> 
  <section className="">
    <h3 className='text-[40px] font-sans py-4 mt-[60px] pl-2 mb-10 font-semibold'>
      Explore Nearby
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {exploreData?.map((item:any)=>(
       
        <SmallCard img={item.img} location={item.location} distance={item.distance}/>
      ))}
      </div>

      </section>
      <section>
        <h1 className="text-[40px] font-sans py-4 mt-[60px] pl-2 mb-10 font-semibold">Live Anywhere</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-4 sm:overflow-x-hidden'>
        {cardsData?.map((item:any)=>(
<Card img={item.img} title={item.title}/>
)) }
</div>
        </section>

        <LargeCard  img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists created by airbnb"
        buttonText="Get Inspired" />
      </div>
     <Footer/>
</main>
</div>
    
  )
}
export async function getStaticProps(){
const exploreData=await fetch("https://links.papareact.com/pyp").
then(
  (res)=>res.json()
);
const cardsData=await fetch("https://links.papareact.com/zp1").
then(
  (res)=>res.json()
);

return{
  props:{
    exploreData,
    cardsData,
  }
}
}


