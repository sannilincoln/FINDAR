import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/Home/HomePage';
import Favorites from '../Screens/Call/Favorites';
import History from '../Screens/Call/History';
import ChatBox from '../Screens/Call/ChatBox';
import { COLORS } from '../constant/theme';
import HomeStackNav from './HomeStackNav';

const HomeTabNav = (navigation) => {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    initialRouteName="HomePage"
     screenOptions={{
    activeTintColor: COLORS.white,
    inactiveTintColor: COLORS.lilac,
    tabBarActiveTintColor: COLORS.pwhite,
    tabBarInactiveTintColor: COLORS.lilac,
    tabBarStyle: { backgroundColor:COLORS.purple, height: 60, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,position: 'absolute', bottom: -10,},
   
     }}
    >
        <Tab.Screen name="HomePage" component={HomePage} options={{
      // title: "Home",
      
      headerShown: false,
      tabBarIcon: ({focused}) => <Ionicons name="home-outline" size={30} color={focused? COLORS.white :COLORS.lilac} />   }}
      />
      <Tab.Screen name="Favorites" component={Favorites} options={{
      // title: "Home",
      headerShown: false,
      tabBarIcon: ({focused}) => <Ionicons name="ios-heart-outline" size={30} color={focused? COLORS.white :COLORS.lilac}/>   }}
      />
      <Tab.Screen name="ChatBox" component={ChatBox} options={{
      // title: "Home",
      headerShown: false,
      tabBarIcon: ({focused}) => <Ionicons name="chatbubbles-outline" size={30} color={focused? COLORS.white :COLORS.lilac}/>     }}
      />
      <Tab.Screen name="History" component={History} options={{
      // title: "Home",
      headerShown: false,
      tabBarIcon: ({focused}) => <MaterialCommunityIcons name="android-messages" size={30} color={focused? COLORS.white :COLORS.lilac}/> }}
      />


    </Tab.Navigator>
  )
}

export default HomeTabNav