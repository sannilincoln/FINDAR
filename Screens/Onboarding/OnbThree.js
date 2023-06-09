import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS,FONT } from '../../constant/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'; 
import BigButton from '../../Components/BigButton'


const OnbThree = ({navigation}) => {
  return (
    <View style={{backgroundColor:COLORS.white,flex:1}}>
    <Layout>
        

        <Image source={require('../../assets/onb3.png')}
        style={styles.img}
        />
        <Text style={styles.btxt}>Tested and trusted secure method to get top notch artisans</Text>

           <View style={styles.dotGroup}>
                <View style={styles.dotPurple}/>
                <View style={styles.dotPurple}/>
                <View style={styles.dotPurple}/>
            </View>
            
            <TouchableOpacity
                 style={{marginVertical:15,alignSelf:'center'}} 
                onPress={()=> navigation.goBack()}
                >
                <Ionicons   name="arrow-back-circle" size={60} color={COLORS.purple} />
                </TouchableOpacity>
                

                <BigButton
                onPress={()=> navigation.navigate('SignIn')}
                title={'Get Started'}
                />

    </Layout>
    </View>
   
  )
}

export default OnbThree

const styles = StyleSheet.create({
  txt:{
      fontFamily:FONT.bold,
      color:COLORS.purple,
      textAlign:'right',
      fontSize: 16,
  },
  btxt:{
      fontFamily:FONT.bold,
      color:COLORS.textBlack,
      textAlign:'center',
       fontSize: 16,
       marginVertical: 20,


  },
  img:{alignSelf:'center',
},

  dotGroup:{
    justifyContent:'center',
    marginVertical:25,
    flexDirection:'row',
    gap:10,

},
dotPurple:{
    margin:5,
    width:16,
    height:16,
    borderRadius:50,
    backgroundColor:`linear-gradient(180deg, #FBFF3F 0%, rgba(146, 91, 189, 0.663079) 48.83%, rgba(27, 7, 255, 0.77) 100%);`

},

dotGray:{
    margin:5,
    width:16,
    height:16,
    backgroundColor:COLORS.gray,
    borderRadius:50
},
  
})