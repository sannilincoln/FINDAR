import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { createDrawerNavigator } from "@react-navigation/drawer"
import React, { useState } from "react"
import { View, Image, Text, StyleSheet, Alert, BackHandler } from "react-native"
import { COLORS, FONT } from "../constant/theme"
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native"


const Drawer = createDrawerNavigator()

export function DrawerContent(props) {
	




	


	return (
		<View style={{backgroundColor:COLORS.purple,flex:1,}}>
        <View style={{marginHorizontal:25,alignItems:'flex-start'}}>

        <Image source={require('../assets/FINDAR2.png')} style={{marginTop:50}}/>

        <TouchableOpacity style={{gap:10,marginTop:20}}
        // onPress={() => props.navigation.navigate('Profile') }
        > 
        <Image source={require('../assets/profileImage.png')}
        style={{width:56, height:56,}}
        />  
        <Text style={{color:COLORS.white,fontFamily:FONT.medium,fontSize:16}}>Olorunfemi Praise</Text>
        </TouchableOpacity>

        <View style={{height:1,width:'100%',backgroundColor:COLORS.gray,marginVertical:25}}/>
        <TouchableOpacity style={{flexDirection:'row', gap:10,alignItems:'center'}}
        onPress={() => props.navigation.navigate('HomeTabNav') }
        >
        <Image source={require('../assets/Icons/Home.png')}/>
        <Text style={{color:COLORS.white,fontFamily:FONT.regular,fontSize:13.33}}>Homepage</Text>
        </TouchableOpacity>
        
         <View style={{height:1,width:'100%',backgroundColor:COLORS.gray,marginVertical:25}}/>
          <TouchableOpacity style={{flexDirection:'row', gap:10,alignItems:'center'}}
          onPress={() => props.navigation.navigate('Profile')}
          >
        <Image source={require('../assets/Icons/profile.png')}/>
        <Text style={{color:COLORS.white,fontFamily:FONT.regular,fontSize:13.33}}>Profile</Text>
        </TouchableOpacity>

         <View style={{height:1,width:'100%',backgroundColor:COLORS.gray,marginVertical:25}}/>
          <TouchableOpacity style={{flexDirection:'row', gap:10,alignItems:'center'}}
          onPress={() => props.navigation.navigate('Favorites')}
          >
        <Image source={require('../assets/Icons/proFilehrt.png')}/>
        <Text style={{color:COLORS.white,fontFamily:FONT.regular,fontSize:13.33}}>Favorites</Text>
        </TouchableOpacity>

         <View style={{height:1,width:'100%',backgroundColor:COLORS.gray,marginVertical:25}}/>
          <TouchableOpacity style={{flexDirection:'row', gap:10,alignItems:'center'}}
            onPress={() => props.navigation.navigate('Chatbox')}
          >
        <Ionicons name="chatbubbles-outline" size={30} color={ COLORS.white }/>
        <Text style={{color:COLORS.white,fontFamily:FONT.regular,fontSize:13.33}}>Chatbox</Text>
        </TouchableOpacity>

         <View style={{height:1,width:'100%',backgroundColor:COLORS.gray,marginVertical:25}}/>
          <TouchableOpacity style={{flexDirection:'row', gap:10,alignItems:'center'}}
            onPress={() => props.navigation.navigate('Settings')}
           >
        <Image source={require('../assets/Icons/settings.png')}/>
        <Text style={{color:COLORS.white,fontFamily:FONT.regular,fontSize:13.33}}>Settings</Text>
        </TouchableOpacity>
        <View style={{height:1,width:'100%',backgroundColor:COLORS.gray,marginVertical:25}}/>

         <TouchableOpacity style={{flexDirection:'row', gap:10,alignItems:'center', marginTop:100}}
            onPress={() => props.navigation.navigate('OnbOne')}
            >
        <Image source={require('../assets/Icons/logout.png')}/>
        <Text style={{color:COLORS.white,fontFamily:FONT.regular,fontSize:13.33}}>Logout</Text>
        </TouchableOpacity>
        </View>
        </View>
	)
}

const styles = StyleSheet.create({
	
})
