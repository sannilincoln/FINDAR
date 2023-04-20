import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../../constant/theme'
import StarRating from '../../Components/StarRating'

const ArtisanPortfolio = ({navigation}) => {
  return (
    <>
    <Image source={require('../../assets/artisan.png')}
      style={{height: 267,width: '100%',}}
      // resizeMode='stretch'
    />

        <View style={{flexDirection:'row', gap:10, position:'absolute', top:45,left:20,alignItems:'center' }}>
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
                            style={{width:26,height:25,borderRadius:13,backgroundColor:COLORS.pwhite,alignItems:'center',justifyContent:'center'}}
            >
                <Image source={require('../../assets/Icons/arrowLeft.png')}/>
            </TouchableOpacity>
        </View>

        
    <View
    style={styles.container}
    > 
        <View style={{marginLeft:100,gap:5}}>
        <Text style={{color:COLORS.purple,fontSize:16,fontFamily:FONT.bold,marginTop:10}}
        >Jane Fashion Home</Text>
        <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
            <Image source={require('../../assets/Icons/Location.png')}/>
            <Text style={{color:COLORS.textBlack,fontFamily:FONT.regular}}>24, Joseph Ajayi street,Yaba,Lagos</Text>
        </View>
        <Text style={{fontFamily:FONT.bold,color:COLORS.gray, fontSize:8}}>Last seen 25 minutes ago</Text>
        </View>
        </View>
        <View style={{height:1,width:'100%',backgroundColor:COLORS.gray, marginVertical:20}}/>


        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                <View style={{width:48,height:48,borderRadius:24,backgroundColor:'#ffffff', alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'#000000',fontFamily:FONT.bold, fontSize:16}}>5.0</Text>
                </View>
                <View>
                <StarRating/>
                <Text style={{color:COLORS.gray,fontFamily:FONT.regular}}>50 Reviews</Text>

                </View>
            </View>
            <TouchableOpacity style={{width:100,height:40,borderRadius:10,borderWidth:1,borderColor:COLORS.purple,alignItems:'center',justifyContent:'center' }}
            onPress={() => navigation.navigate('Map')}
            >
                <Text style={{color:COLORS.purple,fontFamily:FONT.medium, fontSize:11.11}}>View on Map</Text>
            </TouchableOpacity>


        </View>
    
            <Text style={{color:COLORS.purple,fontFamily:FONT.bold, fontSize:16,margin:20}}>About Us</Text>

            <Text
            style={{color:COLORS.textBlack,fontFamily:FONT.bold, fontSize:13.33,marginHorizontal:20,}}
            >
                Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories,
            </Text>

            <Text style={{color:COLORS.purple,fontFamily:FONT.bold, fontSize:16,margin:20}}>Reviews</Text>

            <View style={{flexDirection:'row',gap:30,alignItems:'center', marginHorizontal:20}}>
                <Image source={require('../../assets/review.png')}/>
                <Text style={{color:COLORS.black,fontFamily:FONT.bold, fontSize:13.33}}>Racheal</Text>
            </View>
            <View style={{flexDirection:'row',gap:20,alignItems:'center', marginHorizontal:20, marginVertical:10}}>
                <StarRating/>
                <Text style={{color:COLORS.black,fontFamily:FONT.bold, fontSize:11.11}}>12/08/22</Text>
            </View>
            <Text
            style={{color:COLORS.textBlack,fontFamily:FONT.bold, fontSize:13.33,marginHorizontal:20,}}
            >
                Swift and affordable service. I am sure coming back to sew more of my clothes  
          </Text>
            <View style={{flexDirection:'row',gap:20,alignItems:'center', marginHorizontal:20, marginVertical:10}}>
                <Text style={{color:COLORS.black,fontFamily:FONT.bold, fontSize:11.11}}>See More</Text>
                <Image source={require('../../assets/Icons/caretdown.png')}/>
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

    </>
    )
}

export default ArtisanPortfolio

const styles = StyleSheet.create({
    container:{width:'100%',height: 592,backgroundColor:COLORS.white, position:'absolute',top:208,flex:1,borderTopLeftRadius:32,borderTopRightRadius:32,}
})