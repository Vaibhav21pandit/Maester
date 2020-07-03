import React,{ Component } from "react";
import { StyleSheet, Text,Image, View,TextInput, Button,TouchableOpacity, _Text, ImageBackground } from 'react-native';
export default class RegisterOTP extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('/home/vaibhav/Documents/Maester/Maester/assets/amrut.png')} />
                <TextInput
                    style={styles.inputText}
                    keyboardType='number-pad'
                    placeholder='Enter OTP'
                >    
                </TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#ffffff',
            justifyContent:'center',
            alignItems:'center'
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
            color:'gold',
            tintColor:'gold',
            backgroundColor:"rgba(0,0,0,0.5)",
            paddingVertical:5,
            borderRadius:5
          },
          buttonText:{
            fontSize:16,
            fontWeight:'300',
            color:'gold',
            textAlign:'center'
          },
    }
)