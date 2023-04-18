import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import BigButton from '../../Components/BigButton'

const ForgotpwOne = () => {
  return (
    <Layout 
    extContStyle={{justifyContent:'center',alignItems:'center'}}
    >
        <Image source={require('../../assets/FINDAR.png')}
        style={{marginVertical:15, alignSelf:'flex-start'}}
        />
        <Text style={styles.htxt}>Forgot Password</Text>

        <Text style={styles.txt}>Input your phone number or email address</Text>

        <TextBox
        placeholder={'Phone Number or Email'}
        />
        <View
        style={{marginBottom:60}}
        />
        <BigButton
        title={'Proceed'}
        />

    </Layout>
  )
}

export default ForgotpwOne

const styles = StyleSheet.create({
    htxt:{
        fontSize:23,fontFamily:FONT.medium,color:COLORS.purple ,textAlign:'center',marginVertical:15
    },
    txt:{fontSize:13.33,fontFamily:FONT.regular,color:COLORS.textBlack,textAlign:'center',},
})