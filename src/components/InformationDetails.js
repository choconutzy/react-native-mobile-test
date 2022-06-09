import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../constants/colors";

const InformationDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>Pekerjaan</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.icon}>
                        <Image 
                            source={require('../../assets/detailsIcon/job.png')}
                            style = {{ width: 17, height: 17, resizeMode:"contain" }}
                            />
                    </View>
                    <View style={styles.textDetails}>
                        <Text>Graphic Design</Text>
                        <Text>Opinia</Text>
                        <Text>2008-Sekarang</Text>
                    </View>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Pendidikan</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.icon}>
                        <Image 
                            source={require('../../assets/detailsIcon/education.png')}
                            style = {{ width: 20, height: 20, resizeMode:"contain" }}
                            />
                    </View>
                    <View style={styles.textDetails}>
                        <Text>Design Engineering</Text>
                        <Text>Opinia</Text>
                        <Text>2008-Sekarang</Text>
                    </View>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Tempat Tinggal</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.icon}>
                        <Image 
                            source={require('../../assets/detailsIcon/place.png')}
                            style = {{ width:20, height:20, resizeMode:"contain" }}
                            />
                    </View>
                    <View style={styles.textDetails}>
                        <Text>Kota Bekasi</Text>
                        <Text>(2008-Sekarang)</Text>
                    </View>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Hobi</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.icon}>
                        <Image 
                            source={require('../../assets/detailsIcon/hobby.png')}
                            style = {{ width: 22, height: 22, resizeMode:"contain", justifyContent:"center"  }}
                            />
                    </View>
                    <View style={styles.textDetails}>
                        <Text>Musik</Text>
                    </View>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Website:</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.icon}>
                        <Image 
                            source={require('../../assets/detailsIcon/web.png')}
                            style = {{ width: 17, height: 17, resizeMode:"contain", justifyContent:"center", alignSelf:"baseline" }}
                            />
                    </View>
                    <View style={styles.textDetails}>
                        <Text>www.gdsagdsagdsa.com</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default InformationDetails;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      marginHorizontal:"5%",
    },
    item: {
        borderBottomColor: "rgb(138, 138, 138)",
        borderBottomWidth:1,
        marginVertical:8
    },
    title: {
        color: colors.primary,
        fontWeight:"700",
        fontSize:16,
    },
    detailsContainer: {
        paddingVertical:10,
        flex:1,
        justifyContent:"flex-start",
        flexDirection:"row",
        alignSelf:"center"
    },
    details: {
        fontWeight:"400",
        fontSize:14
    },
    textDetails:{
        flex:8,
    },
    icon: {
        flex:1,
        alignSelf:"center"
    },
  });