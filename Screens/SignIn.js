import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../Components/Layout'
import { COLORS, FONT } from '../constant/theme'
import TextBox from '../Components/TextBox'
import BigButton from '../Components/BigButton'
import HorizontalRule from '../Components/HorizontalRule'
import BigButtonOutline from '../Components/BigButtonOutline'

const SignIn = () => {
  return (
    <Layout>
        <View style={{justifyContent:'center',alignItems:'center'}}>

      <Text style={{fontFamily:FONT.medium,fontSize:24,color:COLORS.purple,textAlign:'center', marginVertical:30}}>
            Sign In</Text>
      
        <TextBox
        placeholder={'Name'}
        htext={'Email or Phone Number'}
        // icon={'md-call-outline'}
        />

        <TextBox
        placeholder={'Password'}
         htext={'Password'}
         // icon={'md-lock-closed-outline'}
        />
                <Text style={{alignSelf:'flex-end',marginVertical:5}}>Forgot password?</Text>
        
        
        <BigButton
        title={'Sign in'}
        onPress={() => navigation.navigate('Menu')}
        />

        <HorizontalRule/>

        <BigButtonOutline/>

        {/* <SocialIcons/> */}

        {/* <TouchableOpacity style={{marginTop:150}}
        onPress={() => navigation.navigate('Sign Up')}
        >
            <Text style={styles.txt}>Not registered yet ?  

                <Text style={styles.signIn} > Sign up</Text>
            
            </Text>

        </TouchableOpacity> */}
        </View>
        

    </Layout>
  )
}

export default SignIn

const styles = StyleSheet.create({})