import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabNav from './HomeTabNav';
import { COLORS, FONT } from '../constant/theme';
import { DrawerContent } from '../Components/DrawerContent';
import Profile from '../Screens/Profile/Profile';
import Settings from '../Screens/Profile/Settings';
import OnbOne from '../Screens/Onboarding/OnbOne';
import ChatBox from '../Screens/Call/ChatBox';
import Favorites from '../Screens/Call/Favorites';
import RetrievePw from '../Screens/Profile/RetrievePw';

const DrawerNav = () => {
    const Drawer = createDrawerNavigator();

  return (
   <Drawer.Navigator
   drawerContent={(props) => <DrawerContent {...props} />}
   screenOptions={{
       headerShown: true,
      headerTransparent: true,
      drawerStyle: {
        //   backgroundColor:COLORS.purple,
          width: 180,
        
      },
    //   header: ({ navigation, route, options }) => {
      
    //     return <Header nav={navigation}/>;
    //   }
      }}
   >
          <Drawer.Screen name="HomeTabNav" component={HomeTabNav} options={{headerShown:false}}/>
          <Drawer.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
          <Drawer.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
          <Drawer.Screen name="OnbOne" component={OnbOne} options={{headerShown:false}}/>
          <Drawer.Screen name="Chatbox" component={ChatBox} options={{headerShown:false}}/>
          <Drawer.Screen name="Favorites" component={Favorites} options={{headerShown:false}}/>
          <Drawer.Screen name="RetrievePw" component={RetrievePw} options={{headerShown:false}}/>
      
    </Drawer.Navigator>
  )
}

export default DrawerNav