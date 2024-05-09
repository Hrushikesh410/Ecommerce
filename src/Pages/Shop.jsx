import React from 'react'
import Hero from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollectiions from '../Components/NewCollections/NewCollectiions'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollectiions/>
      <NewsLetter/>
    </div>
  )
}

export default Shop