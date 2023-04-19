import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../constant/theme'

const ChatViewSenderImg = ({image}) => {
  return (
    <View
    style={styles.container}
    >
      <Image source={image} />
    </View>
  )
}

export default ChatViewSenderImg

const styles = StyleSheet.create({
    container:{width:200,justifyContent:'center',alignItems:'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,borderBottomLeftRadius:10,alignSelf:'flex-end',
    marginVertical:10,marginHorizontal:15}
})