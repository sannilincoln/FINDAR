import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import BigButton from '../../Components/BigButton'
import OtpTextbox from '../../Components/OtpTextbox'

const PasswordSuccesful = () => {
  return (
    <Layout 
    extContStyle={{justifyContent:'center',alignItems:'center'}}
    >
        <Image source={require('../../assets/FINDAR.png')}
        style={{marginVertical:15, alignSelf:'flex-start'}}
        />
        <Text style={styles.htxt}>Create New Password</Text>


        <Image source={require('../../assets/PWSuccess.png')}
        style={{marginTop:150,}}
        />
        <Text style={styles.htxt}>Password created successfully</Text>

        

    </Layout>
  )
}

export default PasswordSuccesful

const styles = StyleSheet.create({
    htxt:{
        fontSize:19.2,fontFamily:FONT.medium,color:COLORS.purple ,textAlign:'center',marginVertical:30
    },
    txt:{fontSize:13.33,fontFamily:FONT.regular,color:COLORS.textBlack,textAlign:'center',},
})