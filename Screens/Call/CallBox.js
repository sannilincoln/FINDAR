import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../../constant/theme'

const CallBox = () => {
  return (
        <View style={{backgroundColor:COLORS.white,flex:1}}>

        <View style={{alignItems:'center',marginTop:70, gap:20}}>
                <Image source={require('../../assets/tailor.png')}
                style={{width:104, height:104,borderRadius:52, marginVertical:15}}
                />
                <Text style={{fontSize:16,fontFamily:FONT.bold,color:COLORS.purple}}>Jane Fashion Home</Text>


                <Text style={{fontSize:12,fontFamily:FONT.regular,color:COLORS.textBlack}}>Calling.....</Text>
        </View>
    </View>
  )
}

export default CallBox

const styles = StyleSheet.create({})