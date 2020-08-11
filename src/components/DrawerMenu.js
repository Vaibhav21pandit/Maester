import React, { useState } from 'react';
import {View,Text ,Image,StyleSheet, ImageBackground, ImageBackgroundComponent} from 'react-native';
import {Drawer,Avatar} from 'react-native-paper'
import {DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer'
// import {Ionicons} from '@expo/vector-icons/'


export default function DrawerMenu(props,{navigation}){
    const [ImagePath,setImagePath]=useState(require("../../assets/Anon.jpeg"))
    return(
        <View style={{flex:1,justifyContent:'flex-start',paddingTop:20,backgroundColor:'white'}}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section style={styles.avatarSection}>
                    <ImageBackground style={{flex:1,width:'100%',height:'100%',justifyContent:'flex-end'}} source={require('../../assets/Marigold.jpg')} >
                        <Avatar.Image style={styles.avatar} source={ImagePath} onTouchEnd={()=> navigation.navigate} /> 
                        {/* <Text>Click to</Text>  */}
                    </ImageBackground>
                    {/* <Image source={require('../../assets/Kailash.jpeg')} /> */}
                </Drawer.Section>
                <DrawerItemList {...props} />

                
            </DrawerContentScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    avatarSection:{
        backgroundColor:'gold',
        height:150,
        alignItems:'flex-start',
        justifyContent:'flex-end'

    },
    avatar:{
        alignSelf:'baseline'
    }
})