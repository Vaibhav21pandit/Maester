import React from 'react';
import { View,StyleSheet, SafeAreaView,Text } from 'react-native';



export default function Header(){

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Amrit</Text>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        

    },
    
    header:{
        // paddingTop:20,
        backgroundColor:'gold',
        marginVertical:20,
        height:30,
        justifyContent:'center', 
        width:'100%'       
    },
    headerText:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#ffffff'
    }
})