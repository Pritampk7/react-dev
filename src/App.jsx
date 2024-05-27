import React from 'react'
import Navbar from './components/Navbar'
import HomeCard from './components/HomeCard'
import Jobs from './components/Jobs'
import Browse from './components/Browse'

const App = () => {
  return (
    <div>
      <Navbar/>
    
      <HomeCard />
      <Browse />
      <Jobs/>
    </div>
  )
}

export default App
