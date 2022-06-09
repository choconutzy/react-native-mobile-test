import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import HeaderProfile from "../../components/Profile/Header";
import ProfileInfo from "../../components/Profile/ProfileInfo";
import TotalPoints from "../../components/Profile/TotalPoints";
import LengkapiProfil from "../../components/Profile/LengkapiProfil";
import ArticleCategory from "../../components/Profile/ArticleCategory";
import Article from "../../components/Profile/Article";
import Headers from "../Header";

const Profile = ({navigation, route}) => {
  return (
    <SafeAreaView>
        <HeaderProfile/>
        <ProfileInfo navigation={navigation} route={route}/>
        <ScrollView>
          <TotalPoints/>
          <LengkapiProfil/>
          <ArticleCategory/>
          <Article/>
        </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white
  },
});