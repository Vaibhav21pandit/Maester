import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default class MyWebComponent extends Component {

   render(){
    return (<WebView style={styles.webpage} source={this.props.url} />);
  }
}

const styles = StyleSheet.create({
    webpage:{
        flex:1,
        width:350,
        height:400,
        marginTop:20
    }
}) 

