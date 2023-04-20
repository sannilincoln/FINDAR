import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ArtisanPortfolio from '../Screens/Home/ArtisanPortfolio';
import HomePage from '../Screens/Home/HomePage';
import Map from '../Screens/Home/Map';
import ChatMessages from '../Screens/Call/ChatMessages';
import CallBox from '../Screens/Call/CallBox';
import CallStackNav from './CallStackNav';


const HomeStackNav = () => {
        const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
              <Stack.Screen name="HomePage" component={HomePage}options={{headerShown:false}}/>
              <Stack.Screen name="ArtisanPortfolio" component={ArtisanPortfolio}options={{headerShown:false}}/>
              <Stack.Screen name="Map" component={Map}options={{headerShown:false}}/>
              {/* <Stack.Screen name="CallStackNav" component={CallStackNav}options={{headerShown:false}}/> */}
              
    </Stack.Navigator>
  )
}

export default HomeStackNav