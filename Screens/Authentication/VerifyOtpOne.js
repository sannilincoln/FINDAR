import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import BigButton from '../../Components/BigButton'
import OtpTextbox from '../../Components/OtpTextbox'

const VerifyOtpOne = () => {
  return (
    <Layout 
    extContStyle={{justifyContent:'center',alignItems:'center'}}
    >
        <Image source={require('../../assets/FINDAR.png')}
        style={{marginVertical:15, alignSelf:'flex-start'}}
        />
        <Text style={styles.htxt}>Verify It Is You</Text>

        <Text style={styles.txt}>Input the four-digit code sent to your phone number </Text>


        <View style={{flexDirection:'row', gap:20}}>

        <OtpTextbox/>
        <OtpTextbox/>
        <OtpTextbox/>
        <OtpTextbox/>
        </View>

        {/* <View
        style={{marginBottom:0}}
        /> */}
        <BigButton
        title={'Verify'}
        />
           <Text style={{fontFamily:FONT.regular,color:COLORS.purple, marginVertical:5}}>Resend verification Code </Text>


    </Layout>
  )
}

export default VerifyOtpOne

const styles = StyleSheet.create({
    htxt:{
        fontSize:23,fontFamily:FONT.medium,color:COLORS.purple ,textAlign:'center',marginVertical:15
    },
    txt:{fontSize:13.33,fontFamily:FONT.regular,color:COLORS.textBlack,textAlign:'center',},
})