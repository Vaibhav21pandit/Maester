import React, {useState} from 'react';
import { StyleSheet, Text,Image, View,FlatList, ImageBackground, ImageBase, ScrollView, StatusBar, useWindowDimensions} from 'react-native';
import {useDeviceOrientation,useDimensions}  from '@react-native-community/hooks';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Header from '../components/Header';

export default function Home()  {  
    console.log(useDeviceOrientation())
    return(
        <ScrollView>
        < ImageBackground style={styles.container} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Temple_wall.jpeg')}>
            < Header/>
            <View>

                <ImageBackground style={styles.tile} source={require('/home/vaibhav/Documents/Maester/Maester/assets/logo-1.png')} > 
                    <TouchableOpacity style={styles.TileButton}>
                        <Text style={styles.TileButtonText}>Katha</Text>
                    </TouchableOpacity>
                </ ImageBackground>
                
                <ImageBackground style={styles.tile} source={require('/home/vaibhav/Documents/Maester/Maester/assets/logo-1.png')} > 
                    <TouchableOpacity style={styles.TileButton}>
                        <Text style={styles.TileButtonText}>Katha</Text>
                    </TouchableOpacity>
                </ ImageBackground>

                <ImageBackground style={styles.tile} source={require('/home/vaibhav/Documents/Maester/Maester/assets/logo-1.png')} > 
                    <TouchableOpacity style={styles.TileButton}>
                        <Text style={styles.TileButtonText}>Katha</Text>
                    </TouchableOpacity>
                </ ImageBackground>
                
                <ImageBackground style={styles.tile} source={require('/home/vaibhav/Documents/Maester/Maester/assets/logo-1.png')} > 
                    <TouchableOpacity style={styles.TileButton}>
                        <Text style={styles.TileButtonText}>Katha</Text>
                    </TouchableOpacity>
                </ ImageBackground>

                <ImageBackground style={styles.tile} source={require('/home/vaibhav/Documents/Maester/Maester/assets/logo-1.png')} > 
                    <TouchableOpacity style={styles.TileButton}>
                        <Text style={styles.TileButtonText}>Katha</Text>
                    </TouchableOpacity>
                </ ImageBackground>
            </View>
        </ImageBackground>
        </ScrollView>
    
    );
    
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch',
        justifyContent:'flex-start',
        // backgroundColor:'#fff',
        // paddingTop:30
        
    },

    tile:{
        alignSelf:'center',
        // flexDirection:'column',
        height:200,
        width:200,
        alignItems:'center',
        justifyContent:'flex-end',
        marginVertical:5

    },
    TileButton:{
        alignSelf: 'flex-end',
        backgroundColor:'gold',
        alignItems:'baseline'

    },
    TileButtonText:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        paddingVertical:5,
        paddingHorizontal:5
    }
})

