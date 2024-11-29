import { useState } from 'react'
import Router from './Routes/Router'
import { createContext,useReducer } from 'react'
import { dropdownReducer } from './Reducers/dropdownReducer';
import { dropdownReducerinitialState } from './InitialStates/InitialStates';


export const ContextStore = createContext();


function App() {
  
  const [state, dispatch] = useReducer(dropdownReducer, dropdownReducerinitialState);

  return (
    <div className='w-full h-full relative'>
      <ContextStore.Provider value={{ state, dispatch }}>
          <Router/>
      </ContextStore.Provider>    
    </div>
  )
}

export default App
