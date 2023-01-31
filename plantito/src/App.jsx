import React from 'react'
import { Hero, Sales } from './components';
import {hero_api,popularSales,topRates} from './data/data'
 
const App = () => {
  return (
    <>
        <main className='flex flex-col gap-16 relative'>
          <Hero hero_api={hero_api}/>
          <Sales endpoint={popularSales}/>
          <Sales endpoint={topRates}/>
        </main>
    </>
  )
}

export default App