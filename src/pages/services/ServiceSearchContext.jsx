import { createContext, useState, useContext } from "react";

const ServiceSearchContext = createContext();

export const useServiceSearchContext = () => useContext(ServiceSearchContext);

const ServiceSearchProvider = ({ children }) => {
  const searchStuff = useState("");

  return <ServiceSearchContext.Provider value={searchStuff}>
    { children }
  </ServiceSearchContext.Provider>
};

export default ServiceSearchProvider