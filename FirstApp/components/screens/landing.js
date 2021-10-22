import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Context } from "../globalContext/globalContext.js"
import containers from "../styles/containers.js"
import fonts from "../styles/fonts.js"
import buttons from "../styles/buttons.js"
import margins from "../styles/margins.js"


function Landing({ navigation, route, props }){

  const globalContext = useContext(Context)
  const { isLoggedIn, appSettings } = globalContext;

  return(
    <View style={containers(appSettings).outerPage}>
      <Text style={fonts(appSettings).h1}>Hello User!</Text>
      <Text style={fonts(appSettings).p}>You are {(isLoggedIn)? '' : "Not "}logged in</Text>
      <TouchableOpacity style={buttons(appSettings).login} onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[buttons(appSettings).login, margins.topTenPercent]} onPress={() => navigation.navigate("Register")}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )



}

export default Landing;
