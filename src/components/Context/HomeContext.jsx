import React, { useEffect, useState } from "react";

export const HomeContext = React.createContext({});

export const HomeContextProvider = (props) => {
  const [variable, setVariable] = useState(0);
  const [page, setPage] = useState(1);
  const [pageC, setPageC] = useState(1);
  const [shortCutButton, setShortCutButton] = useState();
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <HomeContext.Provider
      value={{
        variable,
        setVariable,
        page,
        setPage,
        pageC,
        setPageC,
        shortCutButton,
        setShortCutButton,
        firstSwiper,
        setFirstSwiper,
        secondSwiper,
        setSecondSwiper,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};
