import { useContext, createContext } from "react";
import { useReducer } from "react";
import { reducer } from "./reducer";

export const StateContext = createContext();

export const StateProvider = ({ initialState, children }) => (
  <StateContext.Provider
    value={{ myReducer: useReducer(reducer, initialState), initialState }}
  >
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
