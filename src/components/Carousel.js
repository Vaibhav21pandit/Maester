import { StyleSheet, Text,Image, View,ScrollView} from 'react-native';
import React from 'react';

export default function Carousel(){
    return(
        <View>
            <ScrollView
            horizontal={true}>
                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    <Text style={styles.CarouselText}>Sai Bhakti</Text>
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    <Text style={styles.CarouselText}>Maa Vaishno Devi</Text>
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    <Text style={styles.CarouselText}>Mahakaal Aarti</Text>
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    <Text style={styles.CarouselText}>Siddhivinayak</Text>
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    <Text style={styles.CarouselText}>Hi</Text>
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    <Text style={styles.CarouselText}>Hi</Text>
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    <Text style={styles.CarouselText}>Hi</Text>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    Carousel:{
        height:150,
        width:150,
        marginTop:15,
        backgroundColor:'white'
    },

    CarouselImage:{
        flex:2,
        width:130,
        borderWidth:3,
        borderRadius:15

    },

    CarouselText:{
        flex:1,
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:4,
        alignSelf:'stretch'
    },

})