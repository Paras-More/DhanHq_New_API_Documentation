import { useState } from 'react'
import Router from './Routes/Router'
import { createContext,useReducer } from 'react'
import { dropdownReducer } from './Reducers/dropdownReducer';
import { dropdownReducerinitialState } from './InitialStates/InitialStates';
import { SelectTypeProvider } from './Context/SelectType';

function App() {
  

  return (
    <div className='w-full h-full relative'>
      <SelectTypeProvider>
          <Router/>
       </SelectTypeProvider>
    </div>
  )
}

export default App
