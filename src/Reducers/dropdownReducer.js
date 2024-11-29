// Reducer function (dropdownReducer)
import { dropdownReducerinitialState } from "../InitialStates/InitialStates";
export const dropdownReducer = (state = dropdownReducerinitialState, action) => {
    switch (action.type) {
      case "TOGGLE_DROPDOWN":
        return {
          ...state,
          showDropDown: !state.showDropDown,
        };
      case "SELECTED_OPTION_VALUE":
        return {
          ...state,
          selectedValue: action.payload,
          showDropDown: !state.showDropDown,
        };
      default:
        return state;
    }
  };
