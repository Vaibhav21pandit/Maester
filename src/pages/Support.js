import React,{Component} from 'react'
import {View,Text,StatusBar} from 'react-native'
import Carousel from '../components/Carousel';
import WebView from 'react-native-webview';


export default class Support extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                {/* <StatusBar animated={true} backgroundColor='rgba(0,0,0,0.5)' /> */}
                {/* <Carousel /> */}
                {/* <Text>For Support Contact 111</Text> */}
                {/* 'https://github.com/Vaibhav21pandit/HostedFiles/blob/master/Tyrannosaurus.pdf?raw=true' */}
                <WebView style={{flex:1,height:500,width:'100%'}} source={{uri:'https://vaibhav21pandit.github.io'}} />
            </View>
        );
    }
}

