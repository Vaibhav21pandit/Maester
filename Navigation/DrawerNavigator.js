import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyTabs from './TabNavigator';
import Profile from '../src/pages/Profile';
import Support from '../src/pages/Support';
import {Ionicons,MaterialCommunityIcons,Entypo,FontAwesome} from '@expo/vector-icons'

import DrawerMenu from '../src/components/DrawerMenu';
const Drawer=createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator drawerType='back' drawerContent={props => <DrawerMenu {... props}  />}>
            <Drawer.Screen name='Home' component={MyTabs}  
            options={{
                drawerIcon:() => <MaterialCommunityIcons name="home-minus" size={24} color="dodgerblue" />
            }}/>

            <Drawer.Screen name='Profile' component={Profile} 
            options={{
                drawerIcon:() => <Ionicons name="md-person" size={24} color="dodgerblue" />
            }} />

            <Drawer.Screen name='Support' component={Support} 
            options={{
                drawerIcon:() => <FontAwesome name="support" size={24} color="dodgerblue" />
            }} />
        </Drawer.Navigator>
    )
}