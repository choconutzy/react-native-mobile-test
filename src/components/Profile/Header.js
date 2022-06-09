import React, { useState } from "react";
import { StyleSheet,View, ImageBackground, TouchableOpacity, Image, Modal, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import colors from "../../constants/colors";
import Headers from "../Header";

const HeaderProfile = () => {
  const initialImg = require('../../../assets/bg_profil.png')
  const removeImg = require('../../../assets/background.png')
  const [modalVisible, setModalVisible] = useState(false)
  const [bgHeader, setbgHeader] = useState(initialImg)
  const removeBackground = () => {
    setbgHeader(removeImg)
    setModalVisible(false)
  }
    return(
      <View style={styles.headerContainer}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
          setModalVisible(!modalVisible)
        }}
        >
          <View style={styles.modal}>
            <View style={styles.modalContainer}>
              <View style={styles.topContainer}>
                <View style={styles.optionContainer}>
                  <TouchableOpacity style={styles.item}>
                    <Image source={require('../../../assets/camera.png')} style={styles.icon}></Image>
                    <Text style={styles.lightWhite}>Kamera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.item}>
                    <Image source={require('../../../assets/galery.png')} style={styles.icon}></Image>
                    <Text style={styles.lightWhite}>Galeri</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={removeBackground}>
                  <Text style={styles.boldWhite}>HAPUS GAMBAR BANNER</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={()=>{
                  setModalVisible(false)
                }}>
                  <Text style={styles.bottomText}>BATAL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <ImageBackground source={bgHeader} style={{width:"100%", height:"100%"}}>
          <TouchableOpacity style={styles.changeBG} onPress={()=>{
            setModalVisible(true)
          }}>
              <Image source={require('../../../assets/cam_icon.png')} style={{width:"60%", marginLeft:"18%", resizeMode:"contain"}}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
}

export default HeaderProfile;

const styles = StyleSheet.create({
    headerContainer:{
      height:"30%",
    },
    changeBG: {
      backgroundColor:colors.primary,
      borderRadius:20,
      justifyContent:"flex-end",
      paddingVertical:8,
      paddingHorizontal:4,
      margin:4,
      marginLeft:"88%",
    },
    modal: {
      backgroundColor:"rgba(0,0,0,0.5)",
      height:"100%"
    },
    modalContainer: {
      backgroundColor:colors.white,
      alignContent:"center",
      marginVertical:"70%",
      borderRadius:20,
      shadowColor:"black",
      shadowOffset: {
        width:0,
        height:20,
      },
      shadowOpacity: 0.1,
      shadowRadius:2,
      elevation:1,
      marginHorizontal:30
    },
    topContainer: {
      paddingHorizontal:10,
      paddingTop:10,
      borderTopStartRadius:20,
      borderTopEndRadius:20,
      backgroundColor:colors.primary
    },
    bottomContainer: {
      justifyContent:"center",
      paddingTop:10,
    },
    bottomText: {
      color:colors.primary,
      fontWeight:"700",
      textAlign:"center"
    },
    optionContainer: {
      borderBottomColor:colors.white,
      paddingVertical:10,
      borderBottomWidth:0.3,
      flexDirection:"row",
      justifyContent:"center"
    },
    lightWhite: {
      color:colors.white,
      fontSize:16
    },
    boldWhite: {
      color:colors.white,
      fontSize:16,
      textAlign:"center",
      fontWeight:"700",
      paddingTop:10
    },
    item:{
      paddingHorizontal:"10%"
    },
    icon: {
      height:"38%", 
      resizeMode:"contain", 
      paddingVertical:"9%"
    }
  });