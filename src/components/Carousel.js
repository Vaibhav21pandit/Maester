import { StyleSheet, Text,Image, View,FlatList, ImageBackground, ImageBase, ScrollView, StatusBar} from 'react-native';
import React, {useState} from 'react';

export default function Carousel(){
    return(
        <View>
            <ScrollView
            horizontal={true}>
                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    <Text style={styles.CarouselText}>Hi</Text>
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    <Text style={styles.CarouselText}>Hey</Text>
                </View>

                <View style={styles.Carousel}>
                    <Image style={styles.CarouselImage} source={require('/home/vaibhav/Documents/Maester/Maester/assets/Amrit_Kalash.jpeg')}></Image>
                    <Text style={styles.CarouselText}>YeeHaw</Text>
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
        marginTop:20
    },

    CarouselImage:{
        flex:2,
        width:130
    },

    CarouselText:{
        flex:1,
        fontSize:20,
        fontWeight:'bold'
    },

})