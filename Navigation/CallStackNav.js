import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ChatMessages from '../Screens/Call/ChatMessages';
import CallBox from '../Screens/Call/CallBox';
import ArtisanPortfolio from '../Screens/Home/ArtisanPortfolio';

const CallStackNav = () => {
            const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
<Stack.Screen name="ArtisanPortfolio" component={ArtisanPortfolio}options={{headerShown:false}}/>
<Stack.Screen name="ChatMessages" component={ChatMessages}options={{headerShown:false}}/>
<Stack.Screen name="CallBox" component={CallBox}options={{headerShown:false}}/>

    </Stack.Navigator>
  )
}

export default CallStackNav