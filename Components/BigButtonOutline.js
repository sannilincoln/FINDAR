import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'

const BigButtonOutline = ({title,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.container}>
      <Text style={styles.Txt}>{title}</Text>
    </TouchableOpacity>
  
  )
}

export default BigButtonOutline

const styles = StyleSheet.create({
container:{
    height:48,
    width:352,
    borderRadius:10,
    backgroundColor:COLORS.white,
    alignItems:'center',
    justifyContent:'center',
    // shadowColor: "#037F00",
    margin:15,
    borderWidth:1,
    borderColor:COLORS.purple,
       
   
},
Txt:{
  // fontSize:14,
fontFamily:FONT.semiBold,
color:COLORS.purple
}
})