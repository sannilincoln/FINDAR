import { Image,  ScrollView,  StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import CatButtons from '../../Components/CategoryButton'
import Card from '../../Components/Card'

const History = () => {
  return (
        <View style={{backgroundColor:COLORS.white,flex:1}}>

         <SafeAreaView>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:15, marginTop:25,marginBottom:15}}>
            <View style={{flexDirection:'row',alignItems:'center',gap:15}}>
                <Image source={require('../../assets/profile.png')}/>
                <Text style={{fontFamily:FONT.regular,fontSize:16,color:COLORS.textBlack}}>Hi, Praise</Text>

            </View>

            <Image source={require('../../assets/Icons/bell.png')}/>
            
        </View>

        <View style={{flexDirection:'row',alignItems:'center',gap:15, }}>
       
        <Text style={{fontFamily:FONT.medium,fontSize:23,color:COLORS.purple,marginHorizontal:15,marginTop:20,}} >History</Text>

    </View>

  

            <ScrollView>
            <View style={{gap:15 ,marginVertical:15}}>
           <Card
           image={require('../../assets/tailor.png')}
           cardName={'Jane Fashion Home'}
            location={'500m Away'}
            favImg={require('../../assets/Icons/heart.png')}
            cardtxt={'affordable haircut from the comfort of your home'}
            extxtStyle={{color:COLORS.error}}
           />
           <Card
           image={require('../../assets/tailor.png')}
           cardName={'Jane Fashion Home'} 
            location={'500m Away'}
            favImg={require('../../assets/Icons/heart.png')}
            cardtxt={'affordable haircut from the comfort of your home'}
           />
           <Card
           image={require('../../assets/tailor.png')}
           cardName={'Jane Fashion Home'}
            location={'500m Away'}
            favImg={require('../../assets/Icons/heart.png')}
            cardtxt={'affordable haircut from the comfort of your home'}
           />
           <Card
           image={require('../../assets/tailor.png')}
           cardName={'Jane Fashion Home'}
            location={'500m Away'}
            favImg={require('../../assets/Icons/heart.png')}
            cardtxt={'affordable haircut from the comfort of your home'}
           /> 
           <Card
           image={require('../../assets/tailor.png')}
           cardName={'Jane Fashion Home'}
            location={'500m Away'}
            favImg={require('../../assets/Icons/heart.png')}
            cardtxt={'affordable haircut from the comfort of your home'}
           />
           

            </View>

            </ScrollView>


    </SafeAreaView>


        </View>

   
  )
}

export default History

const styles = StyleSheet.create({
textB:{
  height:40,
  width:300,
  borderWidth:1,
  borderColor:COLORS.purple,
  borderRadius:10,
  marginTop:3,
  paddingHorizontal:16,
  marginHorizontal:15,
  
},
})