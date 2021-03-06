import React, {Component} from 'react';
import { StyleSheet, Text,Image, View,TextInput, Button,TouchableOpacity, _Text, ImageBackground } from 'react-native';

export default class Login extends Component {
  render(){
    return(
        <ImageBackground source={{uri:'https://github.com/Vaibhav21pandit/HostedFiles/blob/master/Temple_wall.jpeg?raw=true'}} style={styles.container}>   
          <Image style={styles.image} source={require('/home/vaibhav/Documents/Maester/Maester/assets/logo(1).png')} />
            
            <TextInput  
            style={styles.inputText}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email..." 
            keyboardType='email-address'
            onSubmitEditing={() => this.password.focus()}
            placeholderTextColor="gold"/>

            <TextInput
            style={styles.inputText}
            placeholder="Password..." 
            secureTextEntry={true}
            placeholderTextColor="gold"
            keyboardType='default'
            ref={(input) => this.password=input} />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.LoginText} onPress={()=>this.props.navigation.navigate('Home')}>Login</Text>
            </TouchableOpacity>

            <Text>Don't have an account yet?</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.SignupText} onPress={()=>this.props.navigation.navigate('Signup')}>Signup</Text>
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
    image:{
      width:350,
      height:454,
      borderRadius:15
    },
    inputView:{
        width:"80%",
        backgroundColor:"rgba(0,0,0,0)",
        borderRadius:25,
        height:100,
        marginBottom:40,
        justifyContent:"center",
        alignItems:'center',
        padding:20
      },
      inputText:{
        width:'80%',
        backgroundColor:'rgba(255,255,255,0.5)',
        marginVertical:10,
        height:50,
        borderRadius:20,
        color:"white",
        paddingHorizontal:5,
        alignSelf:'center'
        // underlineColorAndroid:'white'
      },
      button:{
        width:150,
        marginVertical:20,
        backgroundColor:"white",
        paddingVertical:5,
        borderRadius:5
      },
      LoginText:{
        fontSize:16,
        fontWeight:'300',
        color:'gold',
        textAlign:'center'
      },
      SignupText:{
        fontSize:16,
        fontWeight:'200',
        color:'gold',
        textAlign:'center'

      }
})
