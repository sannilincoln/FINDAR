import { View, Text,StyleSheet } from 'react-native'
import React from 'react'


import {FONT,COLORS} from '../constant/theme'

const HorizontalRule = ({extContStyle}) => {
  return (
    <View style={[styles.container,extContStyle]}>
        <View style={styles.rule}/>
      <Text style={styles.or}>or</Text>
        <View style={styles.rule}/>
    </View>
  )
}

export default HorizontalRule

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:15
},
rule:{
    height: 3,
    width: 159,
    borderRadius:1,
    backgroundColor:COLORS.lilac

},
or:{
    marginHorizontal:10,
    color:COLORS.textBlack,
    fontFamily:FONT.regular


}
})