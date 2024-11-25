import { useState } from 'react'
import Navbar from './Components/Navbar'
import Note from './Components/Note'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full relative'>
      <Note/>
        <Navbar/>
        <Main/>
    </div>
  )
}

export default App
