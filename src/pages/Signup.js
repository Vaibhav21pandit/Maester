import React, {Component} from 'react';
import { StyleSheet, Text,Image, View,TextInput, Button,TouchableOpacity, _Text,Animated, ImageBackground, useWindowDimensions } from 'react-native';

export default class Signup extends Component {
  render(){
    // console.log(this.props);
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('/home/vaibhav/Documents/Maester/Maester/assets/logo-1.png')} />
            
            <TextInput style={styles.inputText}
            underlineColorAndroid='rgba(255,255,255,0.1)'
            placeholder="Full Name"
            placeholderTextColor='gold'
            onSubmitEditing={()=>this.number.focus()}
            />

            <TextInput style={styles.inputText}
            underlineColorAndroid='rgba(255,255,255,0.1)'
            placeholder="Phone Number"
            placeholderTextColor='gold'
            ref={(input)=>this.number=input}
            />
            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('GetOTP')}>Get OTP</Text>
            </TouchableOpacity>
            
            <Text style={styles.LoginText}>Have an account already?</Text>
            
            <TouchableOpacity style={styles.LoginRouter} onPress={()=>this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

        </View>
      
    )
  }
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#FFFFFF'
        // color:'#f5f5f5'
      
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
      logo:{
          marginVertical:20,
          alignSelf:'center',
          width:300,
          height:300

          

      },
      LoginRouter:{
        width:55,
        textAlign:'center',
        color:'gold',
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5
        // alignSelf:'auto',
        // fontWeight:'bold',
        // fontSize:20

        

      },
      LoginText:{
        textAlign:'center',
        alignContent:'flex-end',
        color:'black'


      }

})
// StyleSheet.alignContent