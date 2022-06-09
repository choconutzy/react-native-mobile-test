import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Text,
  View
} from "react-native";
import Person from "../../components/Person";
import { useFollow } from "../../context";


const Following = ({navigation, route}) => {
    const follow = useFollow()
    const userData = [...follow.state.userData]
    const filterData = userData.filter(e=> e.FollowStatus === "true")
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../../assets/background.png')} style={{width:"100%", height:"100%"}}>
        <ScrollView>
            <Text>Ini Search Page</Text>
          {userData.map((data) => (
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

export default Following;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
