import React , {useState} from 'react'
import {Text,View,Stylesheet} from 'react-native';
import {Video} from 'expo-av';
import { Button } from 'react-native-paper';
import Header from '../components/Header';

export default function(){
    const [Muted,setMuted]=useState(false);
    const [isPlaying,setisPlaying]=useState(true); 
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>
            <Header />
            <Video
            source={{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'}}
            isMuted={Muted}
            // // shouldPlay={isPlaying}
            // onLoad={() => console.log("loading")}
            // resizeMode='stretch'
            // // onPlaybackStatusUpdate={(status) => {
            // //     status.
            // // }}
            // isLooping={true}
            useNativeControls
            style={{flex:1,height:500,width:500}}
            />
            {/* <Button title='Pause' onPress={()=> {}} /> */}
            <Button title='Mute' onPress={()=> Muted ? setMuted(false):setMuted(true)} />

        </View>
    )
}