import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offers/Offer'
import NewCollections from '../NewCollections/NewCollections'
import NewsLetter from '../components/NewLetter/NewsLetter'
 

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
       
    </div>
  )
}

export default Shop