import React,{useState} from 'react';
import WebView, {Webview} from 'react-native-webview';
import {View,StyleSheet,Modal,Dimensions, Button} from 'react-native';

const {DeviceHeight,DeviceWidth}=Dimensions.get('window');

export default function WebComponent({url,visibility,setView}){
    return(
        <View style={styles.Modal}>
            <Modal visible={visibility} >
                <Button title='Close' onPress={()=> setView(false)}></Button>
                <WebView style={StyleSheet.WebComponent} source={url} />
            </Modal>
        </View>
    );
} 

const styles = StyleSheet.create({
    Modal:{
        flex:1,
        
    },
    WebComponent:{
        flex:1,
        height:500,
        width:DeviceWidth
    }
})