import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import React, { useState } from "react";
import { Button } from "./Button";
import colors from "../constants/colors";
import { useFollow } from "../context";

const Person = ({ Username, id, status }) => {
  const foll = useFollow()
  const [follow, setFollow] = useState(status);
  const user = String(Username)
  const handleClick = () => {
    if(follow==="true"){
      setFollow("false")
      foll.dispatch({type:'unfollow', payload:{id:id, name:user.toString(), FollowStatus:"false"}})
    } else{
      setFollow("true")
      foll.dispatch({type:'follow', payload:{id:id, name:user.toString(), FollowStatus:"true"}})
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftContainer}>
          <View>
            <Image source={require('../../assets/bg_profil.png')} style={styles.photoProfile}/>
          </View>
          <View style={styles.usernameContainer}>
            <Text
              style={styles.username1}
            >
              {Username}
            </Text>
          </View>
        </View>
        <View>
          <Button onPress={handleClick}>
            {follow==="true"? "Mengikuti": "Ikuti"}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "rgb(119, 205, 197)",
    marginHorizontal: 5,
    marginVertical:2,
    paddingHorizontal: 6,
    borderRadius:40,
    // backgroundColor: "none",
  },
  topContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  topLeftContainer: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignSelf:"center"
  },
  photoProfile: {
    width:40, 
    height:40, 
    marginLeft:"11%", 
    resizeMode:"cover",
    borderRadius:100,
  },
  usernameContainer: {
    flex:1,
    justifyContent: "flex-start",
    alignSelf:"center"
  },
  username1: {
    color: "black",
    fontSize: 15,
    fontWeight: "400",
    fontFamily:"Roboto",
  },
  contentContainer: {
    marginTop: 4,
    marginLeft: 4,
  },
});
