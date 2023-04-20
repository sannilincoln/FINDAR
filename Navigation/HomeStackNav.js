import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ArtisanPortfolio from '../Screens/Home/ArtisanPortfolio';
import HomePage from '../Screens/Home/HomePage';
import Map from '../Screens/Home/Map';
import ChatMessages from '../Screens/Call/ChatMessages';
import CallBox from '../Screens/Call/CallBox';
import CallStackNav from './CallStackNav';
import HomeTabNav from './HomeTabNav';
import CallBoxTwo from '../Screens/Call/CallBoxTwo';


const HomeStackNav = () => {
        const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
              <Stack.Screen name="HomeTabNav" component={HomeTabNav}options={{headerShown:false}}/>
              <Stack.Screen name="ArtisanPortfolio" component={ArtisanPortfolio}options={{headerShown:false}}/>
              <Stack.Screen name="Map" component={Map}options={{headerShown:false}}/>
                <Stack.Screen name="ChatMessages" component={ChatMessages}options={{headerShown:false}}/>
                <Stack.Screen name="CallBox" component={CallBox}options={{headerShown:false}}/>
                <Stack.Screen name="CallBoxTwo" component={CallBoxTwo}options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default HomeStackNav