// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
export const SearchContext = createContext({});

const SearchContextProvider = (props) => {
  const [data, setData] = useState({});

  const searchContext = {};

  return <SearchContext.Provider value={{ ...searchContext }}>{props.children}</SearchContext.Provider>;
};

export default SearchContextProvider;
