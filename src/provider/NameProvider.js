import React, {createContext, useContext} from 'react';

//step1 create context
export const NameContext = createContext('');

//step2 put the values we want in the provider
export const NameProvider = (props) =>{
  const {childern} = props;

  const context ={
    name: 'Thandar',
  };

  return (
    <NameContext.Provider value ={context}>
      {childern}
    </NameContext.Provider>
  );
};

//step 3 create  a usehool to pass on the value
export const useName = () =>{
  const context = useContext(NameContext);
  return{
    ...context,
  };
};