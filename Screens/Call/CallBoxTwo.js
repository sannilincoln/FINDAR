import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../../constant/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

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

export default CallBoxTwo

const styles = StyleSheet.create({})