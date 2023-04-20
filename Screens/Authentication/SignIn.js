import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import BigButton from '../../Components/BigButton'
import HorizontalRule from '../../Components/HorizontalRule'
import BigButtonOutline from '../../Components/BigButtonOutline'

const SignIn = ({navigation}) => {
  return (
        <View style={{backgroundColor:COLORS.white,flex:1}}>

    <Layout>
        <View style={{justifyContent:'center',alignItems:'center'}}>

      <Text style={{fontFamily:FONT.medium,fontSize:24,color:COLORS.purple,textAlign:'center', marginVertical:30}}>
            Sign In</Text>
      
        <TextBox
        htext={'Email or Phone Number'}
        placeholder={'Name'}
        // icon={'md-call-outline'}
        />

        <TextBox
         htext={'Password'}
        placeholder={'*************'}
         // icon={'md-lock-closed-outline'}
        />
                <Text style={{alignSelf:'flex-end',marginVertical:5}}
                onPress={() => navigation.navigate('ForgotpwOne')}
                >Forgot password?</Text>
        
        
        <BigButton
        title={'Sign In'}
        onPress={() => navigation.navigate('HomeTabNav')}
        />

        <HorizontalRule/>

        <BigButtonOutline
        title={'Sign In with Google'}
        imgsrc={require('../../assets/Icons/google.png')}
        />
        <BigButtonOutline
        title={'Sign In with Facebook'}
        imgsrc={require('../../assets/Icons/facebook.png')}
        />

        
        <TouchableOpacity style={{}}
        onPress={() => navigation.navigate('Sign Up')}
        >
            <Text style={styles.txt}>Don’t have an account?   

                <Text style={styles.signIn}
                onPress={() => navigation.navigate('SignUp')}
                 >   Sign up</Text>
            
            </Text>

        </TouchableOpacity>
        </View>
        

    </Layout>
    </View>
  )
}

export default SignIn

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