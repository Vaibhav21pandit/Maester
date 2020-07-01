import React, {Component} from 'react';
import { StyleSheet, Text,Image, View,TextInput, Button,TouchableOpacity, _Text, ImageBackground } from 'react-native';

export default class Signup extends Component {
    render(){
        return(
            <ImageBackground style={styles.container} 
            source={require('/home/vaibhav/Documents/Maester/Maester/assets/Temple_wall.jpeg')}>
                <Image style={styles.logo} source={require('/home/vaibhav/Documents/Maester/Maester/assets/amrut.png')} />
                <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(255,255,255,0.1)'
                placeholder="Full Name"
                placeholderTextColor='gold'
                />
                <TextInput style={styles.inputText}
                underlineColorAndroid='rgba(255,255,255,0.1)'
                placeholder="Phone Number"
                placeholderTextColor='gold'
                />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Get OTP</Text>
                </TouchableOpacity>
            </ImageBackground>

        );
    }
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
      
    },
    inputView:{
        width:"80%",
        backgroundColor:"rgba(0,0,0,0)",
        borderRadius:25,
        height:100,
        marginBottom:40,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        width:'80%',
        backgroundColor:'rgba(255,255,255,0.5)',
        marginVertical:10,
        height:50,
        alignContent:"center",
        textAlign:'center',
        borderRadius:20,
        color:"white",
        // underlineColorAndroid:'white'
      },
      button:{
        width:150,
        marginVertical:20,
        // color:'gold',
        // tintColor:'gold',
        backgroundColor:"rgba(255,255,255,1)",
        paddingVertical:5,
        borderRadius:5
      },
      buttonText:{
        fontSize:16,
        fontWeight:'300',
        color:'gold',
        textAlign:'center'
      },
      logo:{
          marginVertical:30
      }

})
// StyleSheet.alignContent