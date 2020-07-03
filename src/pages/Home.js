import React, {Component} from 'react';
import { StyleSheet, Text,Image, View,TextInput, Button,TouchableOpacity, _Text, ImageBackground } from 'react-native';

export default class Home extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Hi There !!</Text>
            </View>

        )
    }
} 
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})