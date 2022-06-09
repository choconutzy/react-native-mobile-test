import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import AllIcon from "../../../assets/ArticleCategory/AllIcon";
import IdeaIcon from "../../../assets/ArticleCategory/Idea";
import PeopleIcon from "../../../assets/ArticleCategory/People";
import PollingIcon from "../../../assets/ArticleCategory/Polling";
import ArticleIcon from "../../../assets/ArticleCategory/Article";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const ArticleCategory = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.category}>
                <View style={styles.selectedBox}>
                    <AllIcon/>
                </View>
                <Text style={styles.desc}>Semua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
                <View style={styles.box}>
                    <IdeaIcon/>
                </View>
                <Text style={styles.desc}>Idea</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
                <View style={styles.box}>
                    <ArticleIcon/>
                </View>
                <Text style={styles.desc}>Article</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
                <View style={styles.box}>
                    <PollingIcon/>
                </View>
                <Text style={styles.desc}>Polling</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
                <View style={styles.box}>
                    <PeopleIcon/>
                </View>
                <Text style={styles.desc}>Petisi</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ArticleCategory

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:"5%",
        flexDirection:"row",
    },
    category: {
        // margin:10
        width:"20%",
    },
    selectedBox: {
        paddingHorizontal:10,
        paddingVertical:16,
        backgroundColor:colors.primary,
        borderRadius:5,
        paddingLeft:15,
        justifyContent:"center",
        marginVertical:10,
        marginHorizontal:10,
    },
    desc: {
        color:colors.primary,
        textAlign:"center",
        fontSize:12
    },
    box: {
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:5,
        justifyContent:"center",
        paddingLeft:15,
        marginVertical:10,
        marginHorizontal:10,
        borderWidth:1,
        borderColor:colors.gray,
        backgroundColor:colors.white,
    }
})