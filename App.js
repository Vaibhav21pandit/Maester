import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextComponent, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


// import {Provider} from 'react-redux';
// import store from './src/config/store';

import DrawerNavigator from './Navigation/DrawerNavigator';

export default function App() {

  return (
     <NavigationContainer>
        <DrawerNavigator />
     </NavigationContainer>
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

    