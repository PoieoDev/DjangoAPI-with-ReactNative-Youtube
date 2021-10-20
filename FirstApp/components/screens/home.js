import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Context } from "../globalContext/globalContext.js"
import containers from "../styles/containers.js"
import fonts from "../styles/fonts.js"
import buttons from "../styles/buttons.js"


function Home({ navigation, route, props }){

  const globalContext = useContext(Context)
  const { isLoggedIn, appSettings } = globalContext;

  return(
    <View style={containers(appSettings).outerPage}>
      <Text style={fonts(appSettings).h1}>Hello User!</Text>
      <Text style={fonts(appSettings).h1}>YOU ARE HOME</Text>
      <Text style={fonts(appSettings).p}>You are {(isLoggedIn)? '' : "Not "}logged in</Text>
    </View>
  )



}

export default Home;
