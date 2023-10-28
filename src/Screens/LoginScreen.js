import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
// import hands from '../../src/images/hands.png'
import { Image } from 'react-native';

const SignupScreen = () => {
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();

    const handleSignup = () => {
        navigation.replace('Signup');
      };

  return (
       <View styles={styles.loginContainer}>
        {/* <Image source={hands} style={styles.logo}/> */}
        <View style={styles.logo}>
        <Text >Logo</Text>

        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.buttonCreate}>
            <Text style={styles.buttonText}>Create account</Text> 
          </TouchableOpacity>

       </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
input: {
    backgroundColor: '#fff',
    width: 350,
    paddingVertical: 10,
    marginTop: 5,
    borderRadius:20,
    borderColor:"hsl(89.71 100% 58.82%)",
    borderWidth: 2,
    paddingLeft:30,
    marginHorizontal:30,
    marginTop:15,
    marginBottom:15
  },
  loginContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center', justifyContent: 'center' ,
    backgroundColor: "black",
  },
  buttonLog:{
    backgroundColor: "hsl(89.71 100% 58.82%)",
    padding: 10,
    marginHorizontal: 130,
    marginTop: 40,
    borderRadius: 130,
    alignItems: "center"
  },
  buttonText1:{
    color: "blue"
  },
  buttonText:{
    width: "bold",
  },
  buttonForgot:{
    padding: 5,
    marginHorizontal: 60,
    marginTop: 40,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonCreate:{
    backgroundColor: "hsl(89.71 100% 58.82%)",
    padding: 10,
    marginHorizontal: 60,
    marginTop: 40,
    borderRadius: 18,
    alignItems: "center"
  },
  logo:{
    margin:40,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center' ,
  },
})