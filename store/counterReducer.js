import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  counter: 0,
};

const countReducer = (state, action) => {
  const { type, payload } = action;

  if (type === "increment") {
    return { ...state, counter: state.counter + payload };
  }
  if (type === "decrement") {
    return { ...state, counter: state.counter - payload };
  }
  return state;
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const value = {
    counter: state.counter,
    incrementCounter: (payload) => {
      dispatch({ type: "increment" ,payload});
    },
    decrementCounter: (payload) => {
      dispatch({ type: "decrement",payload });
    },
  };
  return <Store.Provider value={value}>{children}</Store.Provider>;
};
