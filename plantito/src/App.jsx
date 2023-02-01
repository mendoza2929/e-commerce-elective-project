import React from 'react'
import { FlexContent, Hero, Sales } from './components';
import {hero_api,popularSales,topRates,highlight,plant} from './data/data'
 
const App = () => {
  return (
    <>
        <main className='flex flex-col gap-16 relative'>
          <Hero hero_api={hero_api}/>
          <Sales endpoint={popularSales} ifExist />
          <FlexContent endpoint={highlight} ifExist/>
          <Sales endpoint={topRates}/>
          <FlexContent endpoint={plant}/>
        </main>
    </>
  )
}

export default App