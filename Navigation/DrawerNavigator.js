import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import MyTabs from './TabNavigation';
import Profile from '../src/pages/Profile';
import StackNavigator from './StackNavigator';
const Drawer=createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={MyTabs} />
            <Drawer.Screen name='Profile' component={Profile} />
            {/* <Drawer.Screen name='Aarti' component={LiveAarti} /> */}
        </Drawer.Navigator>
    )
}