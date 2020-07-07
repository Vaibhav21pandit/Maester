import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextComponent, Button } from 'react-native';

import 'react-native-gesture-handler';

// import {Provider} from 'react-redux';
// import store from './src/config/store';

// import Signup from './src/pages/Signup';
// import Login from './src/pages/Login';
// import GetOTP from './src/pages/RegisterOTP';
// import Home from './src/pages/Home';
import Navigation from './src/Navigation'
// const Stack=createStackNavigator();

export default function App() {

  return (
      <Navigation />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Signup'>
    //     <Stack.Screen name='Login' component={Login} />
    //     <Stack.Screen name='Signup' component={Signup} />
    //     <Stack.Screen name='GetOTP' component={GetOTP} />
    //     <Stack.Screen name='Home' component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    );   
}
    

const styles = StyleSheet.create({
  container:{
    flex: 1,
  backgroundColor: 'rgba(255,255,255,0.9)',
  // alignItems: 'center',
  justifyContent: 'center'
  }
});

    