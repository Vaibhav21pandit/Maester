import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {Navigation,StackTabNavigation} from './StackNavigator';
const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Navigation} />
      <Tab.Screen name="VideoSwiper" component={StackTabNavigation} />
    </Tab.Navigator>
  );
}

