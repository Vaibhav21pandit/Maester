import React from 'react';
import {View} from 'react-native';
import {YouTube} from 'react-native-youtube';
// import {Audio, Video} from 'expo-av';
// import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
export default function App(){
    return (
        <View
        style={{
            backgroundColor:'dodgerblue',
            flex:1
        }}
        >
            {/* <YouTube
                videoId="AqWz1NA9unQ"   // The YouTube video ID
                play                    // control playback of video with true/false
                fullscreen              // control whether the video should play in fullscreen or inline
                loop                    // control whether the video should loop when ended

                // onReady={e => this.setState({ isReady: true })}
                // onChangeState={e => this.setState({ status: e.state })}
                // onChangeQuality={e => this.setState({ quality: e.quality })}
                // onError={e => this.setState({ error: e.error })}

                style={{ alignSelf: 'stretch', height: 300 }}
            /> */}

        {/* <View
        style={{
            backgroundColor:'blue',
            alignItems:'center',
            justifyContent:'center',
            flex:0.3 
        }}
        />
        <View
        style={{
            backgroundColor:'gold',
            flex:0.5
        }}
        /> */}

        </View>
    )
} 

const styles = StyleSheet.create({
    flexview:{
        // width:landscape ? '100%':'30%',
        backgroundColor:'gold'

    },
    ListText:{
        // backgroundColor:'pink',
        alignContent:'center',
        marginVertical:20,
        alignSelf:'center',
        padding:30,
        fontSize:20,
        marginHorizontal:10,
        // marginLeft:35
    },
    listButton:{
        backgroundColor:'rgba(0,0,0,0.2)',
        marginLeft:35,
        marginHorizontal:10,
        alignContent:'center',
        marginVertical:20,
    }
})