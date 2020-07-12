import React, {useState, Component} from 'react';
import { StyleSheet, Dimensions,Text,Image, View,FlatList, ImageBackground, ImageBase,SafeAreaView} from 'react-native';
import Carousel from '../components/Carousel';

const {DeviceHeight,DeviceWidth}=Dimensions.get('window');

export default class LiveAarti extends Component {
    render(){
        return(
            <View style={styles.container} >
                <View style={styles.carousel}>
                    <Carousel />
                </View>   

                <View style={styles.ThumbnailView}>
                    <ImageBackground>

                    </ImageBackground>
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'flex-end',
        backgroundColor:'#d9e3f0',
        // paddingTop:30
    },
    carousel:{
        height:200,
        width:DeviceWidth,
        marginTop:20,

    }
})