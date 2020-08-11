import React from 'react';
import { View,StyleSheet,Dimensions, SafeAreaView,Text,StatusBar, Button } from 'react-native';
// import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default function Header(){
    const navigation=useNavigation();
// console.log(StatusBar.currentHeight)
    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}>
                <MaterialIcons style={styles.headerIcon} name="arrow-back" size={24} color="black" onPress={() => {console.log('Hi')}} />
                {/* <Ionicons style={styles.headerIcon} name="md-arrow-round-back" size={30} color="black" onLongPress={() => console.log('Hi')} /> */}
                <Button title='back' onPress={() => console.log('HI')} />
                <Text style={styles.headerText}>Profile</Text>
            </View>
        </SafeAreaView>
    );

}
// onPress={()=>{navigator.pop}}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        paddingVertical:StatusBar.currentHeight,

        

    },
    
    header:{
        // paddingTop:20,
        backgroundColor:'gold',
        // marginVertical:20,
        height:50,
        justifyContent:'center', 
        width:windowWidth     
    },
    headerText:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'black'
    },

    headerIcon:{
        position:'absolute',
        top:10,
        left:15
    }
})