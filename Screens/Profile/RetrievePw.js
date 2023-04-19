import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import BigButton from '../../Components/BigButton'
import OtpTextbox from '../../Components/OtpTextbox'

const RetrievePw = () => {
  return (
      
    <View style={{backgroundColor:COLORS.white,flex:1}}>
    <Layout 
    extContStyle={{justifyContent:'center',alignItems:'center',}}
    >
        <Image source={require('../../assets/FINDAR.png')}
        style={{marginVertical:15, alignSelf:'flex-start'}}
        />
        <Text style={styles.htxt}>Change Password</Text>

        <TextBox
        htext={'Old Password'}
        placeholder={'*************'}
        />

        <View
        style={{marginBottom:10}}
        />

        <TextBox
        htext={'New Password'}
        placeholder={'*************'}
        />
                <Text style={{alignSelf:'flex-start',marginVertical:5}}>Password should contain at least 8 characters </Text>

        <View
        style={{marginBottom:10}}
        />

        <TextBox
        htext={'Confirm Password'}
        placeholder={'*************'}
        />

        <View
        style={{marginBottom:20}}
        />
        <BigButton
        title={'Create New Password'}
        />


    </Layout>
    </View>
  )
}

export default RetrievePw

const styles = StyleSheet.create({
    htxt:{
        fontSize:23,fontFamily:FONT.medium,color:COLORS.purple ,textAlign:'center',marginTop:15,marginBottom:20
    },
    txt:{fontSize:13.33,fontFamily:FONT.regular,color:COLORS.textBlack,textAlign:'center',},
})