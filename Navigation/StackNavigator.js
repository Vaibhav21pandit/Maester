import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Home from '../src/pages/Home';
import GetOTP from '../src/pages/RegisterOTP'
import LiveAarti from '../src/pages/LiveAarti';

const Stack=createStackNavigator();

export default function Navigation({navigation}) {

  return (
      <Stack.Navigator initialRouteName='Signup' screenOptions={{headerShown:true,headerTitleAlign:'center',headerTintCOlor:'gold'}}>
        <Stack.Screen name='Login' component={Login} options={{title:'Login'}} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='GetOTP' component={GetOTP} />
        <Stack.Screen name='LiveAarti' component={LiveAarti} />
        <Stack.Screen name='Home' component={Home}
        options={{
          headerLeft:() => (
            <Button title='Menu'
            onPress={()=>{navigation.openDrawer()}}
            />
          )
        }}

        />
      </Stack.Navigator>
    
    );   
}
  
