import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../../constant/theme'

const CallBoxTwo = () => {
  return (
        <View style={{backgroundColor:COLORS.white,flex:1}}>

          <View style={{flexDirection:'row', gap:100, position:'absolute', top:60,left:20,alignItems:'center' }}>
            <TouchableOpacity
                            style={{width:26,height:25,borderRadius:13,backgroundColor:COLORS.white,alignItems:'center',justifyContent:'center'}}
            >
                <Image source={require('../../assets/Icons/arrowLeft.png')}/>
            </TouchableOpacity>
            <Text style={{fontFamily:FONT.regular, fontSize:11.11, color:COLORS.pblack,}}>End-to-end encrypted</Text>
        </View>

        <View style={{alignItems:'center',marginTop:115, gap:20}}>
          <Text style={{fontSize:23,fontFamily:FONT.bold,color:COLORS.purple}}>Jane Fashion Home</Text>

          <Text style={{fontSize:16,fontFamily:FONT.regular,color:COLORS.pblack}}>2:02</Text>

                <Image source={require('../../assets/tailorRound.png')}
                style={{width:208, height:208,borderRadius:104, marginVertical:50}}
               
                />


        </View>
    </View>
  )
}

export default CallBoxTwo

const styles = StyleSheet.create({})