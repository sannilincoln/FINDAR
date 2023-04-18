import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import BigButton from '../../Components/BigButton'
import OtpTextbox from '../../Components/OtpTextbox'

const CreateNewPassword = () => {
  return (
    <Layout 
    extContStyle={{justifyContent:'center',alignItems:'center'}}
    >
        <Image source={require('../../assets/FINDAR.png')}
        style={{marginVertical:15, alignSelf:'flex-start'}}
        />
        <Text style={styles.htxt}>Create New Password</Text>

        <TextBox
        htext={'New Password'}
        placeholder={'Phone Number or Email'}
        />
        <Text style={{alignSelf:'flex-start',marginVertical:5}}>Password should contain at least 8 characters </Text>


        <View
        style={{marginBottom:30}}
        />

        <TextBox
        htext={'Confirm Password'}
        placeholder={'Phone Number or Email'}
        />

        <View
        style={{marginBottom:50}}
        />
        <BigButton
        title={'Create New Password'}
        />


    </Layout>
  )
}

export default CreateNewPassword

const styles = StyleSheet.create({
    htxt:{
        fontSize:23,fontFamily:FONT.medium,color:COLORS.purple ,textAlign:'center',marginTop:15,marginBottom:20
    },
    txt:{fontSize:13.33,fontFamily:FONT.regular,color:COLORS.textBlack,textAlign:'center',},
})