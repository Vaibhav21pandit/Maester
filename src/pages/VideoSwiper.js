import React,{useState} from 'react'
import {View,Text, SafeAreaView, FlatList,Dimensions,StyleSheet} from 'react-native';
import {Video} from 'expo-av';
import {useNavigation} from '@react-navigation/native';

const WindowHeight=Dimensions.get('window').height;
const WindowWidth=Dimensions.get('window').width;

export default function VideoSwiper(){
    const [pause, setPause] = useState(false);
    const navigation = useNavigation();


    // console.log(WindowWidth);
    useEffect(() => {
        navigation.addListener('focus', (route) => { setPause(false) });
        navigation.addListener('blur', (route) => { setPause(true) });
    }, []);
    const VideoData=[
        {Title:'Hi',key:'1',VideoSource:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'}},
        {Title:'Hi',key:'2',VideoSource:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'}},
        {Title:'Hi',key:'3',VideoSource:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'}},
        {Title:'Hi',key:'4',VideoSource:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'}},
        {Title:'Hi',key:'5',VideoSource:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'}},
    ];
    return (
        <SafeAreaView style={styles.FlatListContainer} >
            <FlatList
            pagingEnabled={true}
            data={VideoData}
            renderItem={({item}) => {
                return(
                <View>
                    <Video 
                        resizeMode="cover" 
                        shouldPlay={true}
                        isLooping={true} 
                        style={{flex:1,height:662,width:WindowWidth}} 
                        source={item.VideoSource} 
                    /> 
                </View>
            );
            }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    FlatListContainer:{
        flex:1,
    },
})

// const entries= [
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.jpg",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"

//   ]