import { View, TextInput,StyleSheet, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {FONT,COLORS} from '../constant/theme'


const TextBox = ({placeholder,icon, htext,text,onChangeText}) => {
  return (
    <View style={{marginTop:15}}>
    {/* <Ionicons name={icon} size={20} color="#333333"  margin={4}/> */}
    <Text style={styles.txtbox}>{htext}</Text>
        <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={text}
        style={styles.textB}
        />
    </View>
  )
}

export default TextBox

const styles = StyleSheet.create({
textB:{
  height:60,
  width:352,
  borderWidth:1,
  borderColor:COLORS.purple,
  backgroundColor:COLORS.white,
  flexDirection:'row',
  alignItems:'center',
  borderRadius:10,
  marginTop:5,
  paddingHorizontal:16,
  
},
txtbox:{
  height:24,
  width:169,
  fontFamily:FONT.regular,
  color:COLORS.textBlack,
  fontSize: 16,
}

})