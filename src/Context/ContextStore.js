import React, { createContext, useContext, useReducer } from 'react';
import { dropdownReducer } from '../Reducers/dropdownReducer';
// Initial State
const dropdownReducerinitialState = {
  showDropDown: false,
  selectedValue: "Type A",
};
  

// Create context

// Context Provider Component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dropdownReducer, dropdownReducerinitialState);

  return (
    <ContextStore.Provider value={{ state, dispatch }}>
      {children}
    </ContextStore.Provider>
  );
};
