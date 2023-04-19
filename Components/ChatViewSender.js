import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../constant/theme'

const ChatViewSender = ({text}) => {
  return (
    <View
    style={styles.container}
    >
      <Text
      style={{color:COLORS.textBlack,fontFamily:FONT.regular,fontSize:11.11}}
      >{text}</Text>
    </View>
  )
}

export default ChatViewSender

const styles = StyleSheet.create({
    container:{width:200,padding:16,justifyContent:'center',alignItems:'center',
    backgroundColor:COLORS.lilac,borderTopLeftRadius:10,
    borderTopRightRadius:10,borderBottomLeftRadius:10,alignSelf:'flex-end',
    marginVertical:10,marginHorizontal:25}
})