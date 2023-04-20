import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../../constant/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

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
        <View
        style={{flexDirection:'row',justifyContent:'space-around',height:80,width:'100%',backgroundColor:COLORS.purple,position:'absolute',bottom:-10,alignItems:'center',}}
        >
          <MaterialCommunityIcons name="volume-high" size={30} color="black" />
          <MaterialCommunityIcons name="microphone-off" size={30} color="black" />
          <View
          style={{width:48,height:48,borderRadius:24,backgroundColor:COLORS.error,alignItems:'center',justifyContent:'center'}}
          >
              <SimpleLineIcons name="call-end" size={24} color={COLORS.white} />
          </View>

        </View>
    </View>
  )
}

export default CallBox

const styles = StyleSheet.create({})