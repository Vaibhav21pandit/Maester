// import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, TextComponent, Button } from 'react-native';
// import Login from './src/pages/Login';
import Signup from './src/pages/Signup'
// const {window_height,window_width}=Dimensions.get("window");
import 'react-native-gesture-handler';
// import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Button title='Hi Bitch' onPress={()=>console.log('Bitch said HI!')} ></Button> */}
        <Signup />
      </View>
    </NavigationContainer>
    );
    
    
}
    

const styles = StyleSheet.create({
  container:{
    flex: 1
  // backgroundColor: 'gold',
  // alignItems: 'center',
  // justifyContent: 'center',
  }

});

    