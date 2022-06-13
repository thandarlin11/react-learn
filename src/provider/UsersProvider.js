import React, {createContext, useContext, useState,useEffect} from 'react';

//step 1
export const UsersContext = createContext({});

//step 2
export const UsersProvider = (props) => {
  const { childern } = props; 

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = async () =>{
    setLoading(true);
    await fetch(
      'https://randomuser.me/api/?results=100&nat=us')
      .then((response) => response.json())
      .then((data) => setUserData(data.results));
    setLoading(false);
  }; 

  const context = {
      userData,
      loading,
    };

  return(
    <UsersContext.Provider value = {context}>
        {childern}
    </UsersContext.Provider>
    );
};

//step3
export const useUsers = () =>{
  const context = useContext(UsersContext);
  return{
    ...context,
  };
};