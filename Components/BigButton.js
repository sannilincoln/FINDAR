import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'

const BigButton = ({title,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.container}>
      <Text style={styles.Txt}>{title}</Text>
    </TouchableOpacity>
  
  )
}

export default BigButton

const styles = StyleSheet.create({
container:{
    height:50,
    width:352,
    borderRadius:10,
    backgroundColor:COLORS.purple,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#037F00",
    margin:15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
   
},
Txt:{
  fontSize:16,
fontFamily:FONT.medium,
color:COLORS.white
}
})