import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Context } from "../globalContext/globalContext.js"
import containers from "../styles/containers.js"
import fonts from "../styles/fonts.js"
import inputs from "../styles/inputs.js"
import margins from "../styles/margins.js"
import buttons from "../styles/buttons.js"


function Login({ navigation, route, props }){

  const globalContext = useContext(Context)
  const { setIsLoggedIn, appSettings, domain, userObj, setUserObj, setToken } = globalContext;

  const [securePassword, setSecurePassword] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleLogin() {

    setError("")

    let body = JSON.stringify({
      'username': email.toLowerCase(),
      'password': password
    })

    fetch(`${domain}/api/v1.0/user/login-user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:body
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          setError("Invalid Credentials")
          throw res.json()
        }
      })
      .then(json => {
        setUserObj(json)
        setToken(json.token)
        setIsLoggedIn(true)
      })
      .catch(error => {
        console.log(error)
      })

  }



  return(
    <View style={containers(appSettings).outerPage}>
      <View style={containers(appSettings).formBox}>
        <Text style={[fonts(appSettings).h1, margins.top30Percent]}>LOGIN</Text>

        <Text style={fonts(appSettings).errorLabel}>{error}</Text>

        <Text style={[fonts(appSettings).inputLabel, margins.topTenPercent]}>Email Address</Text>
        <TextInput value={email} onChangeText={text => setEmail(text)} textContentType="username" autoCompleteType="email" style={inputs(appSettings).textInput} placeholder='Email'/>

        <Text style={[fonts(appSettings).inputLabel, margins.topTenPercent]}>Password</Text>
        <TextInput value={password} onChangeText={text => setPassword(text)} secureTextEntry={securePassword} textContentType="password" autoCompleteType="password" style={inputs(appSettings).textInput} placeholder='Password'/>

        <TouchableOpacity style={[buttons(appSettings).login, margins.topTenPercent]} onPress={() => handleLogin()}>
          <Text>Login</Text>
        </TouchableOpacity>


      </View>
    </View>
  )



}

export default Login;
