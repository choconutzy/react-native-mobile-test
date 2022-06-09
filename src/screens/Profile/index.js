import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import Profil from "../../components/Profile/index"
import Following from "../FollowData/Following"
import { createStackNavigator } from "@react-navigation/stack";
import Followers from "../FollowData/Followers";
import Person from "../../components/Person";
import Headers from "../../components/Header";
import HeaderProfile from "../../components/Profile/Header";
import Details from "../Details";

const Stack = createStackNavigator()

const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={ ()=> ({
          header: Headers,
        })
          // header:{<Headers/>},
          // headerTitle: <Headers/>,
          // headerStyle: {
          //   backgroundColor: colors.primary,
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }    
      />
      <Stack.Screen
        name="Following"
        component={Following}
        options={{
          title: 'Mengikuti',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}    
      />
      <Stack.Screen
        name="Followers"
        component={Followers}
        options={{
          title: 'Pengikut',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}    
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'transparant',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}    
      />
    </Stack.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white
  },
});