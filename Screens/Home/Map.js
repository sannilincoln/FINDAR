import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../../constant/theme'
import StarRating from '../../Components/StarRating'
import Layout from '../../Components/Layout'

const Map = ({navigation}) => {
  return (
    
    <Layout 
    extContStyle={{marginHorizontal:0,backgroundColor:COLORS.white}}
    >

    <Image source={require('../../assets/map.png')} 
    style={{width: '100%',}}/>
    
        <View style={{marginLeft:20,gap:5}}>
        <Text style={{color:COLORS.purple,fontSize:16,fontFamily:FONT.bold,marginTop:10}}
        >Jane Fashion Home</Text>
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
            <Image source={require('../../assets/Icons/Location.png')}/>
            <Text style={{color:COLORS.textBlack,fontFamily:FONT.bold}}>24, Joseph Ajayi street,Yaba,Lagos</Text>
        </View>
        <Text style={{fontFamily:FONT.bold,color:"#000000", fontSize:16}}>500m Away</Text>
        </View>
       


        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:10}}>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                <View style={{width:48,height:48,borderRadius:24,backgroundColor:'#ffffff', alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#000000',fontFamily:FONT.bold, fontSize:16}}>5.0</Text>
                </View>
                <View>
                <StarRating/>
                <Text style={{color:COLORS.gray, fontFamily:FONT.regular}}>50 Reviews</Text>

                </View>
            </View>
            


        </View>

            
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20, marginVertical:20}}
            >
                <TouchableOpacity style={{width:127,height:48, backgroundColor:COLORS.purple,borderRadius:8,alignItems:'center',justifyContent:'center'}}
                            onPress={() => navigation.navigate('CallBoxTwo')}

                >
                    <Text style={{color:COLORS.white,fontFamily:FONT.medium, fontSize:16}}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:127,height:48, backgroundColor:COLORS.white,borderRadius:8,borderWidth:1,borderColor:COLORS.purple, alignItems:'center',justifyContent:'center'}}
                onPress={() => navigation.navigate('ChatMessages')}
                >
                    <Text style={{color:COLORS.purple,fontFamily:FONT.medium, fontSize:16}}>chat</Text>
                </TouchableOpacity>
            </View>
</Layout>
    
    )
}

export default Map

const styles = StyleSheet.create({
    container:{width:'100%',height: 592,backgroundColor:COLORS.white, position:'absolute',top:208,flex:1,borderTopLeftRadius:32,borderTopRightRadius:32,}
})