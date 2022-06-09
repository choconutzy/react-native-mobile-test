import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home"
import Profile from '../screens/Profile/index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import colors from '../constants/colors';
import People from '../../assets/People';
import ChatRoom from '../screens/Chat';
import Chat from '../../assets/Chat';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/Search';
import Hub from '../screens/Hub';

// const MainStack = createStackNavigator();
// const BottomNav = createBottomTabNavigator();
const BottomNav = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()

export const Main = () => (
    <BottomNav.Navigator
      initialRouteName='Home'
      activeColor='#05b1a1'
      barStyle={{backgroundColor:colors.white}}
    >
      <BottomNav.Screen
            name="Home"
            component={Profile}
            options={{
              tabBarLabel: "",
              tabBarIcon:({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={24}/>),
            }}>
      </BottomNav.Screen>
      <BottomNav.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon:({color, size}) => (<Ionicons name="search" size={24} color={color} />),
        }}
      />
      <BottomNav.Screen
        name="Hub"
        component={Hub}
        options={{
          tabBarLabel: '',
          tabBarIcon:({color, size}) => (
            <People color={color} size={24}/>)
          }}
        />
      <BottomNav.Screen
        name="Chat"
        component={ChatRoom}
        options={{
          tabBarLabel: '',
          tabBarIcon:({color, size}) => (<Chat color={color} size={24}/>)}}
        />
    </BottomNav.Navigator>
);
