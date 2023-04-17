import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../Components/Layout'
import { COLORS,FONT } from '../constant/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'; 


const OnbTwo = () => {
  return (
    <Layout>
        <TouchableOpacity>

        <Text style={styles.txt}>Skip</Text>
        </TouchableOpacity>

        <Image source={require('../assets/onb2.png')}
        style={styles.img}
        />
        <Text style={styles.btxt}>Discover the closest skilled artisan with the aid of FINDAR </Text>

           <View style={styles.dotGroup}>
                <View style={styles.dotPurple}/>
                <View style={styles.dotPurple}/>
                <View style={styles.dotGray}/>
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-between'} }>
                <TouchableOpacity
                 style={{marginTop:25,alignSelf:'center'}} 
                onPress={()=> navigation.navigate('Onboarding Two')}
                >
                <Ionicons   name="arrow-back-circle" size={60} color={COLORS.purple} />
                </TouchableOpacity>

                <TouchableOpacity
                 style={{marginTop:25,alignSelf:'center'}} 
                onPress={()=> navigation.navigate('Onboarding Two')}
                >
                <Ionicons   name="arrow-forward-circle" size={60} color={COLORS.purple} />
                </TouchableOpacity>

            </View>

    </Layout>
   
  )
}

export default OnbTwo

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