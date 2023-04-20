import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts,Roboto_300Light,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigation/AuthStack';
import DrawerNav from './Navigation/DrawerNav';




export default function App() {
  let [fontsLoaded] = useFonts({Roboto_300Light,Roboto_400Regular,Roboto_500Medium,Roboto_700Bold});
   if (!fontsLoaded) {
    return null;
  } else {
  return (
      <NavigationContainer>
      <AuthStack/>
      

      {/* <DrawerNav/>   */}


       <StatusBar style="auto" />
      </NavigationContainer>
  
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
