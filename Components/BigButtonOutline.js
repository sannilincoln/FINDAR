import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'

const BigButtonOutline = ({title,imgsrc,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.container}>
      <Text style={styles.Txt}>{title}</Text>
      <Image source={imgsrc}
      style={styles.img}
      />
    </TouchableOpacity>
  
  )
}

export default BigButtonOutline

const styles = StyleSheet.create({
container:{
    height:60,
    width:352,
    borderRadius:10,
    // backgroundColor:COLORS.white,
    alignItems:'center',
    justifyContent:'center',
    // shadowColor: "#037F00",
    margin:15,
    borderWidth:1,
    borderColor:COLORS.purple,
    flexDirection:'row',
   
        
},
Txt:{
  fontSize:16,
fontFamily:FONT.medium,
color:COLORS.purple,
// width:140
},
img:{
marginLeft:60
}
})