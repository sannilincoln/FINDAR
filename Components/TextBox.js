import { View, TextInput,StyleSheet, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {FONT,COLORS} from '../constant/theme'


const TextBox = ({placeholder,extContStyle, htext,text,onChangeText}) => {
  return (
    <View style={[styles.container,extContStyle]}>
    {/* <Ionicons name={icon} size={20} color="#333333"  margin={4}/> */}
    <Text style={styles.txtbox}>{htext}</Text>
    <View style={styles.textB}>
        <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={text}
        style={{height:50,width:352}}
        />
    </View>
    </View>
  )
}

export default TextBox

const styles = StyleSheet.create({
  container:{
    marginTop:15,
    
  },
  textB:{
  height:50,
  width:352,
  borderWidth:1,
  borderColor:COLORS.purple,
  borderRadius:10,
  marginTop:3,
  paddingHorizontal:16,
  
},
txtbox:{
  height:24,
  width:169,
  fontFamily:FONT.regular,
  color:COLORS.textBlack,
  fontSize: 16,
  marginHorizontal:3,
}

})