import React, { createContext, useContext, useReducer, useState } from 'react';
import { dropdownReducer } from '../Reducers/dropdownReducer';
// Initial State
const dropdownReducerinitialState = {
  showDropDown: false,
  selectedValue: "A",
};
  

// Create context
export const SelectTypeContext = createContext();

// Context Provider Component
export const SelectTypeProvider = ({ children }) => {
  const [state, dispatch] = useState(dropdownReducerinitialState);
  const [showMenu,setShowMenu] = useState(false)

  return (
    <SelectTypeContext.Provider value={{ state, dispatch,showMenu,setShowMenu }}>
      {children}
    </SelectTypeContext.Provider>
  );
};
