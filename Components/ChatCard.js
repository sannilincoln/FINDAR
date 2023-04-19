import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../constant/theme'

const ChatCard = ({image,time,bussinessname,chat,extOnline}) => {
  return (
    <View style={styles.card3}>
            <View style={{flexDirection:'row',alignItems:'center', alignItems:'center',gap:20 }}>
            <Image source={image}
            style={{width:56, height:56,borderRadius:28, }}
            /> 
            <View style={[styles.online,extOnline]}/>

            <Text style={{fontSize:10,fontFamily:FONT.regular,color:COLORS.textBlack,position:'absolute', top:5,right:10 }}>{time}</Text>               
            <View style={{ alignItems:'flex-start', }}>
            <Text style={{fontSize:16,fontFamily:FONT.bold,color:COLORS.purple}}>{bussinessname}</Text>
            <Text style={{fontSize:11.11,fontFamily:FONT.thin,color:COLORS.textBlack}}>{chat}</Text>
            </View>
            </View>

            </View>
  )
}

export default ChatCard

const styles = StyleSheet.create({
    card3:{width:352,height:72,backgroundColor:COLORS.pwhite,borderRadius:15,
        alignSelf:'center', gap:10,marginTop:20,padding:10,
         shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10
    },
    online:{width:16,height:16,borderRadius:8,backgroundColor:COLORS.green,position:'absolute', bottom:3,left:45 }
})