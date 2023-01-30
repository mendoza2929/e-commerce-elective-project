import React from 'react'
import { Hero } from './components';
import {hero_api} from './data/data'
 
const App = () => {
  return (
    <>
        <main>
          <Hero hero_api={hero_api}/>
        </main>
    </>
  )
}

export default App