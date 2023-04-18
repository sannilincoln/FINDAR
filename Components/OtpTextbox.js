import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constant/theme'

const OtpTextbox = ({placeholder}) => {
  return (
    <View style={styles.otpBox}>
        <TextInput
        keyboardType='phone-pad'
        placeholder={placeholder}
        style={{height:19,width:6,fontSize:13}}
        />

    </View>
  )
}

export default OtpTextbox

const styles = StyleSheet.create({
    otpBox:{
    width:34,
    height:43,
    borderWidth:1,
    borderColor:COLORS.purple,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:60
    // margin:10
    
},
})