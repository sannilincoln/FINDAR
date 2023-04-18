import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import BigButton from '../../Components/BigButton'
import OtpTextbox from '../../Components/OtpTextbox'

const VerifyOtpPin = () => {
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

        <OtpTextbox placeholder={'*'}/>
        <OtpTextbox placeholder={'*'}/>
        <OtpTextbox placeholder={'*'}/>
        <OtpTextbox placeholder={'*'}/>
        </View>

        {/* <View
        style={{marginBottom:0}}
        /> */}
        <BigButton
        title={'Verify'}
        />


    </Layout>
  )
}

export default VerifyOtpPin

const styles = StyleSheet.create({
    htxt:{
        fontSize:23,fontFamily:FONT.medium,color:COLORS.purple ,textAlign:'center',marginVertical:15
    },
    txt:{fontSize:13.33,fontFamily:FONT.regular,color:COLORS.textBlack,textAlign:'center',},
})