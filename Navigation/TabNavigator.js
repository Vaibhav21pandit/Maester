import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {Navigation,StackTabVideoNavigation,StackTabAartiNavigation} from './StackNavigator';
import {Ionicons,MaterialCommunityIcons,Entypo,FontAwesome5} from '@expo/vector-icons'
const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator   activeColor="white"
    inactiveColor="black"
    barStyle={{ backgroundColor: 'gold' }}>
      <Tab.Screen name="Home" component={Navigation}         options={{
          tabBarLabel:'Home', 
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home-minus" size={24} color="black" />
          ),
        }} />
      <Tab.Screen name="VideoSwiper" component={StackTabVideoNavigation} options={{
          tabBarLabel:'Videos', 
          tabBarIcon: () => (
            <Entypo name="500px" size={24} color="black" />
          ),
        }} />
      <Tab.Screen name='LiveAarti' component={StackTabAartiNavigation} options={{
          tabBarLabel:'Aarti', 
          tabBarIcon: () => (
            <Ionicons name="ios-flame" size={24} color="black" />
            // <Ionicons name="logo-whatsapp" size={24} color="green" />
          ),
        }} />
    </Tab.Navigator>
  );
}

