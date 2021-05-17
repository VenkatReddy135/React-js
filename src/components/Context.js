import React from 'react';

  const MyContext=React.createContext();
   const MyContextProvider=MyContext.Provider;
   const MyContextConsumer=MyContext.Consumer;
  export {MyContextProvider,MyContextConsumer};