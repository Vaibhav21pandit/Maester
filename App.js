import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, TextComponent, Button } from 'react-native';
// import 'react-native-gesture-handler';

import Signup from './src/pages/Signup'
import Routes from './src/Routes';
export default function App() {

  return (
      <View style={styles.container}>
        <Routes />
      </View>
      
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

    