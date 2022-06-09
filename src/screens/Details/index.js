import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Feed from "../../components/Person";
import InformationDetails from "../../components/InformationDetails";
import colors from "../../constants/colors";


const image = { uri: "https://reactjs.org/logo-og.png" };

const Details = ({route}) => {
  return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../../assets/light_bg.png')} style={{width:"100%", height:"100%"}}>
          <ScrollView>
            <InformationDetails/>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
    height: "100%",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  inputForm: {
    flex: 1,
    paddingVertical: 5,
    // justifyContent: "flex-start",
  },
  inputPost: {
    fontSize: 18,
    // flex: 1,
    // borderWidth: 1,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#2892D7",
    width: "100%",
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
