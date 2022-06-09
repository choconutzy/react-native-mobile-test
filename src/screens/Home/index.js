import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground
} from "react-native";
import Person from "../../components/Person";
import { followingData } from "../../constants/followingData";
import {followersData} from "../../constants/followersData"
import { useFollow } from "../../context";


const Home = () => {

  // let follow = useFollow()
  // let filter = follow.state.userData
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../../assets/background.png')} style={{width:"100%", height:"100%"}}>
        <ScrollView>
          {followingData.map((data) => (
            <Person
              key={data.id}
              id={data.id}
              Username={data.nama}
              status={data.FollowStatus}
            />
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
