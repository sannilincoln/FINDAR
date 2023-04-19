import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../constant/theme'

const ChatViewReceiver = ({text}) => {
  return (
    <View
    style={styles.container}
    >
      <Text
      style={{color:COLORS.white,fontFamily:FONT.regular,fontSize:11.11}}
      >{text}</Text>
    </View>
  )
}

export default ChatViewReceiver

const styles = StyleSheet.create({
    container:{width:154,padding:16,justifyContent:'center',alignItems:'center',
    backgroundColor:COLORS.purple,borderTopLeftRadius:10,
    borderTopRightRadius:10,borderBottomRightRadius:10,alignSelf:'flex-start',
    marginVertical:10,marginHorizontal:25}
})