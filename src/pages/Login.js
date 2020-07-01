import React, {Component} from 'react';
import { StyleSheet, Text,Image, View,TextInput, Button,TouchableOpacity, _Text, ImageBackground } from 'react-native';


export default class Login extends Component {
//   state={
//     email:'',
//     password:''
//   }
  render(){
      return(
          <ImageBackground style={styles.container} 
           source={require('/home/vaibhav/Documents/Maester/Maester/assets/Temple_wall.jpeg')}>   
            <Image style={{marginVertical:20}} source={require('/home/vaibhav/Documents/Maester/Maester/assets/amrut.png')} />
              <TextInput  
              style={styles.inputText}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email..." 
              placeholderTextColor="gold"/>
              {/* onChangeText={text => this.setState({email:text})}/> */}
              <TextInput
              style={styles.inputText}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password..." 
              placeholderTextColor="gold"/>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
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
        borderRadius:20,
        color:"white",
        // underlineColorAndroid:'white'
      },
      button:{
        width:150,
        marginVertical:20,
        backgroundColor:"white",
        paddingVertical:5,
        borderRadius:5
      },
      buttonText:{
        fontSize:16,
        fontWeight:'300',
        color:'gold',
        textAlign:'center'
      }

})
