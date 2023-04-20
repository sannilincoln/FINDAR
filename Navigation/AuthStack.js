import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OnbOne from '../Screens/Onboarding/OnbOne';
import OnbTwo from '../Screens/Onboarding/OnbTwo';
import OnbThree from '../Screens/Onboarding/OnbThree';
import CreateNewPassword from '../Screens/Authentication/CreateNewPassword';
import ForgotpwOne from '../Screens/Authentication/ForgotpwOne';
import ForgotpwTwo from '../Screens/Authentication/ForgotpwTwo';
import PasswordSuccesful from '../Screens/Authentication/PasswordSuccesful';
import SignIn from '../Screens/Authentication/SignIn';
import SignUp from '../Screens/Authentication/SignUp';
import VerifyOtpOne from '../Screens/Authentication/VerifyOtpOne';
import VerifyOtpPin from '../Screens/Authentication/VerifyOtpPin';
import VerifySuccessful from '../Screens/Authentication/VerifySuccessful';
import HomeTabNav from './HomeTabNav';
import DrawerNav from './DrawerNav';

const AuthStack = ({navigation}) => {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
              <Stack.Screen name="OnbOne" component={OnbOne} options={{headerShown:false}}/>
              <Stack.Screen name="OnbTwo" component={OnbTwo}options={{headerShown:false}}/>
              <Stack.Screen name="OnbThree" component={OnbThree}options={{headerShown:false}}/>
              <Stack.Screen name="CreateNewPassword" component={CreateNewPassword}options={{headerShown:false}}/>
              <Stack.Screen name="ForgotpwOne" component={ForgotpwOne}options={{headerShown:false}}/>
              <Stack.Screen name="ForgotpwTwo" component={ForgotpwTwo}options={{headerShown:false}}/>
              <Stack.Screen name="PasswordSuccesful" component={PasswordSuccesful}options={{headerShown:false}}/>
              <Stack.Screen name="SignIn" component={SignIn}options={{headerShown:false}}/>
              <Stack.Screen name="SignUp" component={SignUp}options={{headerShown:false}}/>
              <Stack.Screen name="VerifyOtpOne" component={VerifyOtpOne}options={{headerShown:false}}/>
              <Stack.Screen name="VerifyOtpPin" component={VerifyOtpPin}options={{headerShown:false}}/>
              <Stack.Screen name="VerifySuccessful" component={VerifySuccessful}options={{headerShown:false}}/>
              <Stack.Screen name="HomeTabNav" component={HomeTabNav}options={{headerShown:false}}/>
              {/* <Stack.Screen name="DrawerNav" component={DrawerNav}options={{headerShown:false}}/> */}
             
      


    </Stack.Navigator>
  )
}

export default AuthStack