import { StyleSheet, Text,Image, View,ScrollView} from 'react-native';
import React from 'react';

export default function Carousel(){
    return(
        <View>
            <ScrollView showsHorizontalScrollIndicator={true} horizontal={true} style={styles.CarouselView}>
                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={{uri:'https://github.com/Vaibhav21pandit/HostedFiles/blob/master/trex.jpg?raw=true'}}></Image>
                    {/* <Text style={styles.CarouselText}>Sai Bhakti</Text> */}
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={{uri:'https://github.com/Vaibhav21pandit/HostedFiles/blob/master/Temple_wall.jpeg?raw=true'}}></Image>
                    {/* <Text style={styles.CarouselText}>Maa Vaishno Devi</Text> */}
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    {/* <Text style={styles.CarouselText}>Mahakaal Aarti</Text> */}
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    {/* <Text style={styles.CarouselText}>Siddhivinayak</Text> */}
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    {/* <Text style={styles.CarouselText}>Hi</Text> */}
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    {/* <Text style={styles.CarouselText}>Hi</Text> */}
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    {/* <Text style={styles.CarouselText}>Hi</Text> */}
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    CarouselView:{
        backgroundColor:'white'
    },
    Carousel:{
        height:200,
        width:350,
        marginTop:15,
        backgroundColor:'white',
        // alignItems:'center'

    },

    CarouselImage:{
        flex:2,
        width:500,
        height:10,
        borderWidth:3,
        borderRadius:15

    },

    CarouselText:{
        flex:1,
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:4,
        textAlign:'center'
    },

})