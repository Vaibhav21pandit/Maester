import React, {useState, Component} from 'react';
import { StyleSheet, Dimensions,Text,Image, View,FlatList, ImageBackground, ImageBase,SafeAreaView, Modal, Button} from 'react-native';
import Carousel from '../components/Carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {WebView} from 'react-native-webview';
import WebComponent from '../components/ModalWebview';
import {useNavigation} from '@react-navigation/native'

const {DeviceHeight,DeviceWidth}=Dimensions.get('window');

export default function LiveAarti() {
    const navigation=useNavigation();
    const [AartiThumbnails,setAartiThumbnails]=useState([
        {Name:'Sai Nath Aarti',key:'1',image:require('../../assets/Sai.png'),AartiURL:{uri:'https://www.sai.org.in/en/sai-video-popup'}},
        {Name:'Mahakaal Aarti',key:'2',image:require('../../assets/Mahakal.webp'),AartiURL:{uri:'https://www.youtube.com/embed/-3ecDmzjmNQ'}},
        {Name:'Venkatesh Aarti',key:'3',image:require('../../assets/Venkatesh.jpeg'),AartiURL:{uri:'https://www.youtube.com/embed/Yqi2_3E1ZNk'}},
        {Name:'Siddhivinayak Aarti',key:'4',image:require('../../assets/SiddhiVinayak.jpg'),AartiURL:{uri:'https://www.youtube.com/embed/C41rCWMzql4'}},
        {Name:'Kaashi Vishwanath',key:'5',image:require('../../assets/logo-1.png'),AartiURL:{uri:'https://www.youtube.com/embed/-H2mmm5pMmY'}}
        ]);
        
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
                    <TouchableOpacity style={styles.ThumbnailButton} onPress={() => {setWebViewLink(item.AartiURL),setAartiView(true)}}>
                        <Text style={styles.ThumbnailButtonText}>{item.Name}</Text>
                    </TouchableOpacity>
                    <WebComponent visibility={AartiView} setView={setAartiView} url={WebViewLink} />
                    {/* <Modal visible={AartiView}>
                        <View style={styles.AartiModal}> 
                            <Button style={styles.ModalButton} title='Close' onPress={() => setAartiView(false)} />
                            <WebView style={styles.AartiView} source={AartiURLs[item.key]} />
                        </View>
                    </Modal> */}
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