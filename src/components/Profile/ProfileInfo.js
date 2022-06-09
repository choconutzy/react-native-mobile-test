import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import { FontAwesome } from '@expo/vector-icons';
import { useFollow } from "../../context";

const ProfileInfo = ({navigation}) => {

  const seeFollowing = () => {
    navigation.navigate('Following')
  }
  const seeFollowers = () => {
    navigation.navigate('Followers')
  }
  let follow = useFollow()

  return(
      <View style={styles.profilContainer}>
          <View style={styles.topContainer}>
          <View style={styles.imgProfileContainer}>
              <Image source={require('../../../assets/bg_profil.png')} style={styles.photoProfile}></Image>
          </View>
          <View style={styles.usernameContainer}>
              <Text style={styles.username}>Skylar Vaccaro</Text>
              <View style={styles.star}>
              <FontAwesome name="star-o" size={18} color={colors.orange} />
              <FontAwesome name="star-o" size={18} color={colors.orange} />
              <FontAwesome name="star-o" size={18} color={colors.orange} />
              <FontAwesome name="star-o" size={18} color={colors.orange} />
              <FontAwesome name="star-o" size={18} color={colors.orange} />
              </View>
          </View>
          </View>
          <View style={styles.centerContainer}>
          <Text style={styles.normal}>Penulis | Politisi</Text>
          <Text style={styles.bold}>"Hidup itu sederhana, kita yang membuatnya sulit."</Text>
          </View>
          <View style={styles.bottomContainer}>
          <View style={styles.subBottomContainer}>
              <Text style={[styles.normal, {color:colors.white}]}>Postingan</Text>
              <Text style={[styles.bold, {color:colors.white}]}>26</Text>
          </View>
          <View style={[styles.subBottomContainer, {borderColor:colors.white, borderRightWidth:1, borderLeftWidth:1}]}>
              <TouchableOpacity onPress={seeFollowing}>
                <Text style={[styles.normal, {color:colors.white}]}>Mengikuti</Text>
                <Text style={[styles.bold, {color:colors.white}]}>{follow.state.following}</Text>
              </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.subBottomContainer} onPress={seeFollowers}>
              <Text style={[styles.normal, {color:colors.white}]}>Pengikut</Text>
              <Text style={[styles.bold, {color:colors.white}]}>{follow.state.followers}</Text>
          </TouchableOpacity>
          </View>
      </View>
  )
}

export default ProfileInfo;

const styles = StyleSheet.create({
    profilContainer: {
      shadowColor:"black",
      shadowOffset: {
        width:0,
        height:0,
      },
      shadowOpacity: 0.5,
      shadowRadius:5,
      elevation:2,
      marginHorizontal:20,
      backgroundColor:"white",
      borderRadius:10,
      marginTop:"-10%",
    },
    photoProfile: {
      width:80, 
      height:80, 
      marginLeft:"11%", 
      resizeMode:"cover",
      borderRadius:100,
    },
    topContainer: {
      marginTop:"-10%",
      justifyContent:"flex-start",
      flexDirection:"row",
      paddingLeft:"10%"
    },
    usernameContainer: {
      alignSelf:"flex-end",
    },
    username: {
      fontWeight:"bold",
      fontSize:15
    },
    star: {
      justifyContent:"flex-start",
      resizeMode:"contain",
      flexDirection:"row"
    },
    centerContainer: {
      justifyContent:"center",
      marginVertical:20,
      marginHorizontal:60,
    },
    normal: {
      fontSize:14,
      fontWeight:"400",
      textAlign:"center"
    },
    bold: {
      fontSize:14,
      fontWeight:"700",
      textAlign:"center"
    },
    bottomContainer: {
      backgroundColor:colors.primary,
      borderBottomEndRadius:10,
      borderBottomStartRadius:10,
      color:colors.white,
      flexDirection:"row",
      justifyContent:"center",
      paddingVertical:10
    },
    subBottomContainer:{
      paddingHorizontal:10
    }
  });