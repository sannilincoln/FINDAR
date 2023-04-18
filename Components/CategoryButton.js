import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'

const CatButtons = ({title,onPress,extContStyle,exttxtStyle}) => {
    
  return (
    <TouchableOpacity
    onPress={onPress}
    style={[styles.container, extContStyle]}>
      <Text style={[styles.Txt,exttxtStyle]}>{title}</Text>
    </TouchableOpacity>
  
  )
}

export default CatButtons

const styles = StyleSheet.create({
container:{
    height:45,
    width:100,
    borderRadius:10,
    backgroundColor:COLORS.purple,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#037F00",
    marginVertical:15,
    
        
   
},
Txt:{
  fontSize:14,
fontFamily:FONT.regular,
color:COLORS.white
}
})