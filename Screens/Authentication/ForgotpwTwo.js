import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import BigButton from '../../Components/BigButton'
import OtpTextbox from '../../Components/OtpTextbox'

const ForgotpwTwo = ({navigation}) => {
  return (
      <View style={{backgroundColor:COLORS.white,flex:1}}>
    <Layout 
    extContStyle={{justifyContent:'center',alignItems:'center'}}
    >
        <Image source={require('../../assets/FINDAR.png')}
        style={{marginVertical:15, alignSelf:'flex-start'}}
        />
        <Text style={styles.htxt}>Forgot Password</Text>

        <Text style={styles.txt}>A  four- digit code has been sent to *******0031 input the code below</Text>


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
        onPress={()=> navigation.navigate('CreateNewPassword')}
        title={'Confirm'}
        />
           <Text style={{alignSelf:'flex-end',fontFamily:FONT.regular,color:COLORS.purple, marginVertical:5}}>Send code to email </Text>


    </Layout>
    </View>
  )
}

export default ForgotpwTwo

const styles = StyleSheet.create({
    htxt:{
        fontSize:23,fontFamily:FONT.medium,color:COLORS.purple ,textAlign:'center',marginVertical:15
    },
    txt:{fontSize:13.33,fontFamily:FONT.regular,color:COLORS.textBlack,textAlign:'center',},
})