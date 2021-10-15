import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Navigator from './components/navigation/navigator.js'
import { Context, Provider } from "./components/globalContext/globalContext.js";

function App(props) {

  return(
    <Provider>
      <View style={{flex:1}}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </View>
    </Provider>

    )





}

export default App;
