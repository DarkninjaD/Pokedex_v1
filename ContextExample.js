import React, { useContext } from "react";

const AppContext = React.createContext();

// Use AppProvider at the root of your project to provided to all children
const AppProvider = ({ children }) => {
  /*
   Here is where you put data for your context.
   ie your cool data.
   const coolData = "very cool"
   const coolFunctions = (name) => {
     console.log("your very cool", name)
   }
  */
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

// use "useAppContext" to pull items out of context
// Example File Coolapp.js
// import {useAppContext} from "./'CONTEXT LOCATION'"
// const {coolData, coolFunctions} = useAppContext()
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
