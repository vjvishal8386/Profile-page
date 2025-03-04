import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import UserInfo from './components/UserInfo'
import SocialLinks from './components/SocialLinks'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='container mx-auto px-4 md:px-0'>
      <Navbar />
      <div className='w-full flex md:flex-row flex-col'>
        <Profile />
        <UserInfo />
      </div>
      <div className="w-full flex md:flex-row flex-col">

        <SocialLinks />
        <Projects />
      </div>
    </div>
  )
}

export default App