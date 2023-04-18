import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,Roboto_300Light,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from '@expo-google-fonts/roboto';

import SignUp from './Screens/Authentication/SignUp';
import ForgotpwOne from './Screens/Authentication/ForgotpwOne';
import ForgotpwTwo from './Screens/Authentication/ForgotpwTwo';
import CreateNewPassword from './Screens/Authentication/CreateNewPassword';
import PasswordSuccesful from './Screens/Authentication/PasswordSuccesful';
import VerifyOtpOne from './Screens/Authentication/VerifyOtpOne';
import VerifyOtpPin from './Screens/Authentication/VerifyOtpPin';
import VerifySuccessful from './Screens/Authentication/VerifySuccessful';
import HomePage from './Screens/Home/HomePage';
import SearchResult from './Screens/Home/SearchResult';


export default function App() {
  let [fontsLoaded] = useFonts({Roboto_300Light,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold});
   if (!fontsLoaded) {
    return null;
  } else {
  return (
  
  <SearchResult/>
  
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
