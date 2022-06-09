import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import Insight from "../../../assets/PostItems/Insight";
import Like from "../../../assets/PostItems/Like";
import Comment from "../../../assets/PostItems/Comment";
import Views from "../../../assets/PostItems/Views";
import Repost from "../../../assets/PostItems/Repost";

const Article = () => {
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.imgContainer}>
                    <Image source={require('../../../assets/bg_profil.png')} style={styles.photoProfile}></Image>
                </View>
                <View style={styles.titleContainer}>
                    <Text style>Julia Mareta</Text>
                    <View style={styles.details}>
                        <Text style={styles.time}>19 menit yang lalu |</Text>
                        <Text style={styles.category}> Idea</Text>
                    </View>
                </View>
            </View>
            <View style={styles.centerContainer}>
                <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, Selengkapnya...</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.leftBottom}>
                    <View style={styles.items}>
                        <Insight/>
                        <Text>32</Text>
                    </View>
                    <View style={styles.items}>
                        <Like/>
                        <Text>32</Text>
                    </View>
                    <View style={styles.items}>
                        <Comment/>
                        <Text>32</Text>
                    </View>
                    <View style={styles.items}>
                        <Views/>
                        <Text>32</Text>
                    </View>
                    <View style={styles.items}>
                        <Repost/>
                        <Text style={{paddingHorizontal:3}}>32</Text>
                    </View>
                </View>
                <View style={styles.rightBottom}>

                </View>
            </View>
        </View>
    )
}

export default Article

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginVertical:10,
        borderBottomColor:"black",
        borderBottomWidth:0.5,
        paddingBottom:5
    },
    topContainer:{
        flexDirection:"row",
    },
    imgContainer: {
        alignSelf:"center",
        paddingRight:8
    },
    photoProfile:{
        width:40, 
        height:40, 
        resizeMode:"cover",
        borderRadius:100,
        borderColor:colors.primary,
        borderWidth:2
    },
    centerContainer: {
        paddingVertical:5
    },
    details: {
        flexDirection:"row"
    },
    bottomContainer: {
        flexDirection:"row",
        justifyContent:"space-between"
    },
    leftBottom:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    items:{
        paddingHorizontal:5,
        flexDirection:"row",
        alignSelf:"center"
    }
})