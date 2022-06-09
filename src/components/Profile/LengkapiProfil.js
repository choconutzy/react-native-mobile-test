import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const LengkapiProfil = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.more}>Lengkapi Profil Anda 2/3</Text>
            <View style={styles.barContainer}>
                <Image source={require('../../../assets/status_bar.png')} style={{width:"100%", resizeMode:"contain"}}/>
            </View>
        </View>
    )
}

export default LengkapiProfil

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:"5%"
    },
    more:{
        fontSize:14,
        fontWeight:"400",
        color:"rgb(116, 116, 116)"
    },
    barContainer:{
        // width:"100%"
    }
})