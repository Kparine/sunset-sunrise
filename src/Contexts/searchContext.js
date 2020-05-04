// eslint-disable-next-line no-unused-vars
// @ts-check
import React, { createContext, useState } from 'react';
export const SearchContext = createContext({});

const SearchContextProvider = (props) => {
  const [data, setData] = useState({});

  const SearchDataContext = { data, setData };

  return <SearchContext.Provider value={SearchDataContext}>{props.children}</SearchContext.Provider>;
};

export default SearchContextProvider;
