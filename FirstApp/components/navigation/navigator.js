import React, {useContext} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { Context } from "../globalContext/globalContext.js"


import Landing from '../screens/landing.js'
import Login from '../screens/login.js'
import Home from '../screens/home.js'

const Stack = createStackNavigator();

function Navigator(props) {

  const globalContext = useContext(Context)
  const { isLoggedIn, userObj } = globalContext;

  return(
    <Stack.Navigator initialRouteName="Landing">
    {(!isLoggedIn || !userObj)?
      <>
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </>
      :
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    }

    </Stack.Navigator>

  )



}


export default Navigator;
