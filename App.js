import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,Roboto_300Light,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from '@expo-google-fonts/roboto';
import OnbOne from './Screens/OnbOne';
import OnbTwo from './Screens/OnbTwo';
import OnbThree from './Screens/OnbThree';
import SignIn from './Screens/SignIn';


export default function App() {
  let [fontsLoaded] = useFonts({Roboto_300Light,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold});
   if (!fontsLoaded) {
    return null;
  } else {
  return (
  
  <SignIn/>
  
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
