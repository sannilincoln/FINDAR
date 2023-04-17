import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout = ({children}) => {
  return (

    <SafeAreaView>
    <View style={styles.container}>
      {children}
    </View>

    </SafeAreaView>
  )
}

export default Layout

const styles = StyleSheet.create({
    container:{
    // flex:1,
    marginVertical: 15,
    marginHorizontal: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 4,
    // borderColor: 'black',
},
})