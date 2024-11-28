import { useState } from 'react'
import Navbar from './Components/Navbar'
import Note from './Components/Note'
import AppLayout from './Components/AppLayout'
import Router from './Routes/Router'
import store from './Store/Store'
import { Provider } from 'react-redux';

function App() {

  return (
    <div className='w-full h-full relative'>
      <Provider store={store}>
          <Router/>
      </Provider>
    </div>
  )
}

export default App
