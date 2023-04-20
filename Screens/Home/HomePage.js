import { Image,  ScrollView,  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import CatButtons from '../../Components/CategoryButton'
import Card from '../../Components/Card'

const HomePage = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
        
    
    <SafeAreaView>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:15, marginTop:25,marginBottom:15}}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',gap:15}}
            onPress={() => {console.log('pressed')}}
            >
                <Image source={require('../../assets/profile.png')}/>
                <Text style={{fontFamily:FONT.regular,fontSize:16,color:COLORS.textBlack}}>Hi, Praise</Text>

            </TouchableOpacity>

            <Image source={require('../../assets/Icons/bell.png')}/>
            
        </View>

        <Text style={{fontFamily:FONT.medium,fontSize:13.33,color:COLORS.textBlack,marginHorizontal:15}}>ARTISANS AROUND YOU</Text>

        <TextBox
        placeholder={'Search for artisans close to you'}
        extContStyle={{marginHorizontal:15,marginTop:0}}
        />
    <Text style={{fontFamily:FONT.medium,fontSize:13.33,color:COLORS.purple,margin:15}}>Categories</Text>

        <ScrollView 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           >
                <View style={{flexDirection:'row',gap:15}}>
                    <CatButtons
                    extContStyle={{marginLeft:15,width:45}}
                    title={'All'}
                    />
                    <CatButtons
                    extContStyle={{backgroundColor:COLORS.white,borderWidth:1,borderColor:COLORS.purple,}}
                    exttxtStyle={{color:COLORS.purple}}
                    title={'Barbers'}
                    />
                    <CatButtons
                    extContStyle={{backgroundColor:COLORS.white,borderWidth:1,borderColor:COLORS.purple,width:150}}
                    exttxtStyle={{color:COLORS.purple}}
                    title={'Fashion designer'}
                    />

                    <CatButtons
                     extContStyle={{backgroundColor:COLORS.white,borderWidth:1,borderColor:COLORS.purple,}}
                    exttxtStyle={{color:COLORS.purple}}
                    title={'Hairdresser'}
                    />
                    <CatButtons
                    extContStyle={{backgroundColor:COLORS.white,borderWidth:1,borderColor:COLORS.purple,width:120, marginRight:15}}
                    exttxtStyle={{color:COLORS.purple}}
                    title={'Make-up Artist'}
                    />

                </View>

                

           </ScrollView>
        
        <ScrollView>
            <View style={{gap:10}}>
           <Card
           image={require('../../assets/tailor.png')}
           cardName={'Jane Fashion Home'}
            location={'500m Away'}
            cardtxt={'affordable haircut from the comfort of your home'}
            price={'$100/hr'}
           />

           <Card
           image={require('../../assets/barber.png')}
           cardName={'Ayo the barber'}
            location={'500m Away'}
            cardtxt={'affordable haircut from the comfort of your home'}
            price={'$100/hr'}
           />

           <Card
           image={require('../../assets/furniture.png')}
           cardName={'Great Furniture'}
            location={'500m Away'}
            cardtxt={'affordable haircut from the comfort of your home'}
            price={'$100/hr'}
           />

           <Card
           image={require('../../assets/tailor.png')}
           cardName={'Jane Fashion Home'}
            location={'500m Away'}
            cardtxt={'affordable haircut from the comfort of your home'}
            price={'$100/hr'}
           />

            </View>
            </ScrollView>

    </SafeAreaView>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})