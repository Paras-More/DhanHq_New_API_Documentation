import { useState } from 'react'
import Navbar from './Components/Navbar'
import Note from './Components/Note'
import AppLayout from './Components/AppLayout'
import Router from './Routes/Router'

function App() {

  return (
    <div className='w-full h-full relative'>
      <Note/>
        {/* <AppLayout/> */}
        <Router/>
    </div>
  )
}

export default App
