import { View, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {FONT,COLORS} from '../constant/theme'


const ChatTxtBox = ({placeholder,icon,text,onChangeText}) => {
  return (
    <View style={styles.textB}>
        <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={text}
        style={styles.txtbox}
        />
    <TouchableOpacity>

    <Ionicons name={'ios-mic-outline'} size={20} color="#333333"  margin={4}/>
    </TouchableOpacity>
    </View>
  )
}

export default ChatTxtBox

const styles = StyleSheet.create({
textB:{
  height:50,
  width:352,
  backgroundColor:COLORS.pwhite,
  paddingHorizontal:40,
  flexDirection:'row',
  alignItems:'center',

  justifyContent:'space-around',
  borderRadius:16,
  marginVertical:40,
  marginHorizontal:20
},
txtbox:{
  height:50,
  width:352,
}

})