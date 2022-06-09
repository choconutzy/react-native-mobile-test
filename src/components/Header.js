import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import colors from "../constants/colors";
import { Header } from "react-native-elements";

export default function Headers({navigation, route}){
    const handleClick = () => {
        navigation.navigate('Details')
    }
    // const goBack = () => {
    //     navigation.navigate('Home')
    // }
    return(
        <Header
            backgroundColor={colors.primary}
            leftComponent={
                <TouchableOpacity>
                    <Text style={styles.text}>Back</Text>
                </TouchableOpacity>
            }
            centerComponent={
                <Text style={styles.text}>Profil</Text>
            }
            rightComponent={
                <TouchableOpacity onPress={handleClick}>
                    <Image source={require('../../assets/account.png')} style={{resizeMode:"contain", width:20}}/>
                </TouchableOpacity>
            }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-end",
        flexDirection:"row",
        justifyContent:"center",
        width:"100%",
        height:"100%",
        backgroundColor:colors.primary,
        paddingHorizontal:10,
        paddingVertical:12,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight:"700",
        paddingHorizontal:"10%"
      },
    item: {
        // paddingHorizontal:50
    }
})