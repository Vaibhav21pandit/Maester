import React, {useState, Component} from 'react';
import { StyleSheet, Dimensions,Text,Image, View,FlatList, ImageBackground, ImageBase,SafeAreaView, Modal, Button} from 'react-native';
import Carousel from '../components/Carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {WebView} from 'react-native-webview';
import WebComponent from '../components/ModalWebview';
const {DeviceHeight,DeviceWidth}=Dimensions.get('window');

// https://www.youtube.com/embed/-IJuKT1mHO8

export default function LiveAarti({navigation}) {
    const [AartiThumbnails,setAartiThumbnails]=useState([
        {Name:'Sai Nath Aarti',key:'1',image:require('../../assets/Sai.png'),pressmethod:()=> {navigation.navigate('Home')},AartiURL:{uri:'https://www.youtube.com/embed/9ZhkYyPxRjE'}},
        {Name:'Mahakaal Aarti',key:'2',image:require('../../assets/Mahakal.webp'),pressmethod:()=> {navigation.navigate('Home')},AartiURL:{uri:'https://www.youtube.com/embed/9ZhkYyPxRjE'}},
        {Name:'Venkatesh Aarti',key:'3',image:require('../../assets/Venkatesh.jpeg'),pressmethod:()=> {navigation.navigate('Home')},AartiURL:{uri:'https://www.youtube.com/embed/9ZhkYyPxRjE'}},
        {Name:' Aarti',key:'4',image:require('../../assets/SiddhiVinayak.jpg'),pressmethod:()=> {navigation.navigate('Home')},AartiURL:{uri:'https://www.youtube.com/embed/9ZhkYyPxRjE'}},
        {Name:'Mahakaal Aarti',key:'5',image:require('../../assets/logo-1.png'),pressmethod:()=> {navigation.navigate('Home')},AartiURL:{uri:'https://www.youtube.com/embed/9ZhkYyPxRjE'}}
    ]);
    const AartiURLs={
        '1':{uri:'https://www.youtube.com/embed/9ZhkYyPxRjE' },
        '2':{uri:'https://www.youtube.com/embed/9ZhkYyPxRjE'},
        '3':{uri:'https://www.youtube.com/embed/9ZhkYyPxRjE'},
        '4':{uri:'https://www.youtube.com/embed/9ZhkYyPxRjE'},
        '5':{uri:'https://www.youtube.com/embed/9ZhkYyPxRjE'}
    };
    
    const [AartiView,setAartiView]=useState(false);
    const [WebViewLink,setWebViewLink]=useState('');

    return(
        <View style={styles.container} >
            <View style={styles.carousel}>
                <Carousel />
            </View>  
        
            <View style={styles.ThumbnailView}>
                <FlatList
                numColumns={2}
                data={AartiThumbnails}
                // keyExtractor={({item})=>({item.id})}
                renderItem={({item}) => (
                    <View >
                    <ImageBackground style={styles.Thumbnail} source={item.image}/>
                    <TouchableOpacity style={styles.ThumbnailButton} onPress={() => setAartiView(true)}>
                        <Text style={styles.ThumbnailButtonText}>{item.Name}</Text>
                    </TouchableOpacity>
                    <Modal visible={AartiView}>
                        <View style={styles.AartiModal}> 
                            <Button style={styles.ModalButton} title='Close' onPress={() => setAartiView(false)} />
                            <WebView style={styles.AartiView} source={item.AartiURL} />
                        </View>
                    </Modal>
                    </View>
                    
                )}
                />
            </View> 
        </View>
)
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d9e3f0',
        // paddingTop:30
    },
    carousel:{
        height:170,
        width:DeviceWidth,
        marginTop:10,

    },
    ThumbnailView:{
        flex:1,
        width:'100%',
        // paddingHorizontal:5,
        alignItems:'center',
        justifyContent:'space-between'

        // backgroundColor:'coral'
    },

    
    Thumbnail:{
        height:150,
        width:150,
        alignItems:'center',
        justifyContent:'flex-end',
        marginVertical:5,
        marginHorizontal:10,
        borderWidth:5
    },

    ThumbnailButton:{
        alignSelf: 'center',
        backgroundColor:'black',
        alignItems:'baseline',
        borderRadius:10
    },


    ThumbnailButtonText:{
        fontSize:15,
        color:'#ffffff',
        fontWeight:'bold',
        textAlign:'center',
        paddingVertical:5,
        paddingHorizontal:5,
    },
    AartiModal:{
        flex:1,
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        flexDirection:'column'
    },
    ModalButton:{
        // position:'absolute',
        // left:0,
        // top:0,    
    },
    AartiView:{
        alignSelf:'center',
        width:'85%',
        height:'40%',
        position:'absolute',
        margin:30
    }
})