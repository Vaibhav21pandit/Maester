import React from 'react';
import {StyleSheet,View} from 'react-native';
import {Webview} from 'react-native-webview'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function SaiAarti(){
    return(
        <View style={styles.container}>
            <Text></Text>
            <Webview />
            <TouchableOpacity>
                <Text>Shirdi Sai Katha</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d9e3f0',
    },
})