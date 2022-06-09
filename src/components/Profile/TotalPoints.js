import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const TotalPoints = () => {
    return(
        <View style={styles.container}>
            <Image source={
                require('../../../assets/badge.png')
            } style={styles.badge}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Total Poin</Text>
                <View style={styles.poinMoreContainer}>
                    <View style={styles.poinContainer}>
                        <Text style={[styles.title, {color:colors.orange, fontSize:16}]}>230</Text>
                    </View>
                    <Text style={styles.more}>Klaim Reward</Text>
                </View>
            </View>
        </View>
    )
}

export default TotalPoints

const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        backgroundColor:"background: rgba(228, 228, 228, 1)",
        paddingHorizontal:"5%",
        flexDirection:"row",
        paddingVertical:10
    },
    badge: {
        height:50,
        resizeMode:"contain"
    },
    title: {
        fontSize:14,
        fontWeight:"700"
    },
    textContainer:{
        alignSelf:"center"
    },
    poinMoreContainer: {
        flexDirection:"row"
    },
    poinContainer:{
        paddingRight:5
    },
    more:{
        fontSize:14,
        fontWeight:"400",
        color:"rgb(116, 116, 116)"
    }
})