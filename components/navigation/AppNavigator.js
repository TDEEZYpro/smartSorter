import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, ActivityIndicator, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { useState, useEffect } from "react";
// import { onAuthStateChanged } from 'firebase/auth';
// import { authentication } from '../src/firebase/firebase-config';
const Stack = createNativeStackNavigator();
import LoginScreen from "../../src/Screens/SignupScreen";
import SignupScreen from "../../src/Screens/LoginScreen";
import HomeScreen from '../../src/Screens/HomeScreen';

//if use is auth
const AuthStack = () => {
    return(
        // <Stack.Navigator>
        //     <Stack.Screen name="Login" component={LoadingScreen}/>
        // {/* <Stack.Screen name="Signup" component={SignupScreen}/> */}
        // </Stack.Navigator>
        <View style={styles.loadingContainer}>
        {/* <ActivityIndicator size="large" color='royalblue' /> */}
            {/* <LoginScreen/> */}
            {/* <SignupScreen/> */}
            <HomeScreen/>
       </View>
    )

}
//after user is authed
const afterAuthStack = () => {
    return(
        <View>
            <Text>after login</Text>
        </View>
    )
    
}

//loading logo
const LoadingScreen = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color='royalblue' />
      </View>
    );
 }

//applivation navigation code
 const AppNavigator = () => {
//     const [user, setUser] = useState(null);
//   const [initialAuthChecked, setInitialAuthChecked] = useState(false);
//   const [isAppLoading, setAppLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(authentication, (authenticatedUser) => {
//       setUser(authenticatedUser);
//       setInitialAuthChecked(true);
//       setAppLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   if (isAppLoading) {
//     return <LoadingScreen />;
//   }

  return (
    <NavigationContainer>
      {/* {initialAuthChecked && (user ? <ChatStack /> : <AuthStack />)} */}
      <AuthStack />
    </NavigationContainer>
  );

 }
 
 const styles = StyleSheet.create({
     loadingContainer: {
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
        },
        screensHeading:{
            alignItems:'center',
        }
    });

    export default AppNavigator;