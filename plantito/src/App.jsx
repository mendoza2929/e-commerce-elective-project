import React from 'react'
import { FlexContent, Footer, Hero, Navbar, Sales } from './components';
import Cart from './components/Cart';
import {hero_api,popularSales,topRates,highlight,plant, footerAPI} from './data/data'
 
const App = () => {
  return (
    <>
        <Navbar/>
        <Cart/>
        <main className='flex flex-col gap-16 relative'>
          <Hero hero_api={hero_api}/>
          <Sales endpoint={popularSales} ifExist />
          <FlexContent endpoint={highlight} ifExist/>
          <Sales endpoint={topRates}/>
          <FlexContent endpoint={plant}/>
        </main>
        <Footer footerAPI = {footerAPI}/>
    </>
  )
}

export default App