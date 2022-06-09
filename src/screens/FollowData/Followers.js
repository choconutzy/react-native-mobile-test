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

const Followers = ({navigation, route}) => {
  const follow = useFollow()
  const userData = [...follow.state.userData]
  const filterData = userData.filter(e=> e.FollowStatus === "false")
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../../assets/background.png')} style={{width:"100%", height:"100%"}}>
        <ScrollView>
          {filterData.map((data) => (
            <Person
            {...data}
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

export default Followers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
