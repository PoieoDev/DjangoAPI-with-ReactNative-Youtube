import React, { useState, useEffect, useRef, createContext} from "react";
import * as SecureStore from 'expo-secure-store';

const Context = createContext()

const Provider = ( { children } ) => {


  const [ domain, setDomain ] = useState("http://10.0.2.2:8000")
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ userObj, setUserObj ] = useState()
  const [ appSettings, setAppSettings ] = useState({})

  const setToken = async (token) => {
    await SecureStore.setItemAsync('token', token);
  }

  function initAppSettings() {
    fetch(`${domain}/api/v1.0/app/settings`, {
      method: 'GET'
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw res.json()
        }
      })
      .then(json => {
        console.log(json)
        setAppSettings(json)
      })
      .catch(error => {
        console.log(error)
      })

  }

  useEffect(() => {
    initAppSettings()
  }, [])

  const globalContext = {
    domain,
    isLoggedIn,
    setIsLoggedIn,
    appSettings,
    setAppSettings,
    userObj,
    setUserObj,
    setToken,
  }

  return <Context.Provider value={globalContext}>{children}</Context.Provider>

};

export { Context, Provider };
