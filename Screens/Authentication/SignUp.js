import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import BigButton from '../../Components/BigButton'
import HorizontalRule from '../../Components/HorizontalRule'
import BigButtonOutline from '../../Components/BigButtonOutline'

const SignUp = () => {
  return (
    <Layout>
        <View style={{justifyContent:'center',alignItems:'center'}}>

      <Text style={{fontFamily:FONT.medium,fontSize:24,color:COLORS.purple,textAlign:'center', marginTop:15,}}>
           Register</Text>
      
        <TextBox
        htext={'Name'}
        placeholder={'Olorunfemi Praise'}
        // icon={'md-call-outline'}
        />
        <TextBox
        htext={'Phone Number '}
        placeholder={'07087476823'}
        // icon={'md-call-outline'}
        />
        <TextBox
        htext={'Email'}
        placeholder={'xyz@gmail.com'}
        // icon={'md-call-outline'}
        />

        <TextBox
         htext={'Password'}
        placeholder={'*************'}
         // icon={'md-lock-closed-outline'}
        />
                <Text style={{alignSelf:'flex-start',marginVertical:5}}>Password should contain at least 8 characters </Text>
        
        
        <BigButton
        title={'Sign Up'}
        onPress={() => navigation.navigate('Menu')}
        />

        <HorizontalRule
        extContStyle={{marginVertical:5}}
        />

        <BigButtonOutline
        title={'Sign In with Google'}
        imgsrc={require('../../assets/Icons/google.png')}
        extContStyle={{margintop:5, height:48}}
        />
        <BigButtonOutline
        title={'Sign In with Facebook'}
        imgsrc={require('../../assets/Icons/facebook.png')}
        extContStyle={{marginVertical:10, height:48}}

        />

        
        <TouchableOpacity style={{}}
        onPress={() => navigation.navigate('Sign Up')}
        >
            <Text style={styles.txt}>Already have an account?   

                <Text style={styles.signIn} >  Sign In</Text>
            
            </Text>

        </TouchableOpacity>
        </View>
        

    </Layout>
  )
}

export default SignUp

const styles = StyleSheet.create({
  txt:{
    marginVertical:15,
    fontFamily:FONT.regular,
    textAlign:'center',
    fontSize:16,
    color:COLORS.black,

},
signIn:{
    // marginVertical:15,
    fontFamily:FONT.regular,
    textAlign:'center',
    fontSize:16,
    color:COLORS.purple,

},
})