import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

import Support from '../src/pages/Support'
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Home from '../src/pages/Home';
import GetOTP from '../src/pages/RegisterOTP'
import LiveAarti from '../src/pages/LiveAarti';
import VideoSwiper from '../src/pages/VideoSwiper';
import Profile from '../src/pages/Profile';

const Stack=createStackNavigator();

function Navigation({navigation}) {

  
  return (
      <Stack.Navigator initialRouteName='Signup' screenOptions={{headerShown:true,headerTitleAlign:'center',headerTintCOlor:'gold'}}>
        <Stack.Screen name='Login' component={Login} options={{title:'Login'}} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='GetOTP' component={GetOTP} />
        <Stack.Screen name='LiveAarti' component={LiveAarti} options={{headerStyle:{backgroundColor:'gold'}}} />
        <Stack.Screen name='Support' component={Support} />
        <Stack.Screen name='Home' component={Home}
        options={{
          headerStyle:{backgroundColor:'gold'},
          headerLeft:() => (
            <Ionicons name='md-home'
            style={{padding:5,height:35,width:35}}
            size={30}
            onPress={()=>{navigation.openDrawer()}}
            />
          )
        }}

        />
      </Stack.Navigator>
    
    );   
}

function StackTabVideoNavigation(){

  return(
    <Stack.Navigator>
      <Stack.Screen name='VideoSwipe' component={VideoSwiper} options={{headerShown:false}} />
    </Stack.Navigator>
  )

}

function StackTabAartiNavigation(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='LiveAarti' component={LiveAarti}  options={{headerStyle:{backgroundColor:'gold'},headerTitleAlign:'center'}} />
    </Stack.Navigator>
  )
}

function StackTabProfileNavigation(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile}  options={{headerStyle:{backgroundColor:'gold'},headerTitleAlign:'center'}} />
    </Stack.Navigator>
  )
}
  
export {Navigation,StackTabVideoNavigation,StackTabAartiNavigation,StackTabProfileNavigation};
