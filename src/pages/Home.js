import React, {useState} from 'react';
import { StyleSheet, Text,Image, View,FlatList, ImageBackground, ImageBase,SafeAreaView} from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import Carousel from '../components/Carousel';


export default function Home({navigation})  {  
    const [Tiles,setTiles]=useState([
        {Heading:'Katha Amrit',key:'1',image:require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg'),onpress:()=> {navigation.navigate('LiveAarti')}},
        {Heading:'Live Aarti',key:'2',image:require('/home/vaibhav/Documents/Maester/Maester/assets/Aarti.jpeg'),onpress:()=> navigation.navigate('LiveAarti')},
        {Heading:'Gallery',key:'3',image:require('/home/vaibhav/Documents/Maester/Maester/assets/Radha-Krishna.jpeg'),onpress:()=> navigation.navigate('LiveAarti')},
        {Heading:'Amrit Kund',key:'4',image:require('/home/vaibhav/Documents/Maester/Maester/assets/Sun-1.jpeg'),onpress:()=> navigation.navigate('LiveAarti')},
        {Heading:'Stotra Shakti',key:'5',image:require('/home/vaibhav/Documents/Maester/Maester/assets/Kailash.jpeg'),onpress:()=> navigation.navigate('LiveAarti')},
    ]);

    return(
        <SafeAreaView style={{flex:1}}>
            <Carousel />
        
        <View style={styles.TileContainer}>
            < View style={styles.container}>
                <FlatList numColumns={1}
                // keyExtractor={(item)=>item.Id}
                data={Tiles}
                renderItem={({item})=>
                (
                    <ImageBackground style={styles.tile} source={item.image} > 
                    <TouchableOpacity style={styles.TileButton} onPress={item.onpress}>
                        <Text style={styles.TileButtonText}>{item.Heading}</Text>
                    </TouchableOpacity>
                    </ ImageBackground>
                )
                }
                />
        </View>
        </View>
        </SafeAreaView>
    
    );
    
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'flex-end',
        backgroundColor:'#d9e3f0',
        // paddingTop:30
        
    },

    TileContainer:{
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        marginTop:20,
        alignItems:'stretch',
        borderWidth:5,
        borderRadius:10

    },

    tile:{
        height:150,
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end',
        marginVertical:5,
        marginHorizontal:10,
        borderWidth:5
        
    },
    TileButton:{
        alignSelf: 'flex-end',
        backgroundColor:'black',
        alignItems:'baseline',
        borderRadius:10

    },
    TileButtonText:{
        fontSize:15,
        color:'#ffffff',
        fontWeight:'bold',
        textAlign:'center',
        paddingVertical:5,
        paddingHorizontal:5
    }
})

