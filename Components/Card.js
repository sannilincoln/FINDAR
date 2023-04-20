import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

import {FONT,COLORS} from '../constant/theme'
import { Entypo } from '@expo/vector-icons';



const Card = ({image, favImg,price,cardName,cardtxt,location,extxtStyle}) => {
  return (
    <View style={styles.contaner}>
      <View style={styles.foodCont}>
        <Image source={image}        
          />
          <View style={{marginTop:15,gap:5}}>
            <View style={{flexDirection:'row',gap:5}}>
            <Image source={require('../assets/Icons/star.png')} />
            <Image source={require('../assets/Icons/star.png')} />
            <Image source={require('../assets/Icons/star.png')} />
            <Image source={require('../assets/Icons/star.png')} />
            <Image source={require('../assets/Icons/star.png')} />

            </View>
          <Text style={styles.name}>{cardName}</Text>
          <View style={{height:30,width:117}}>
          <Text style={styles.txt}>{cardtxt}</Text>

          </View>
              <View style={{flexDirection:'row',alignItems:'center', gap:5}}>
                <Image source={require('../assets/Icons/Location.png')}/>
              <Text style={styles.location}>{location}</Text>
              </View>
          </View>

          <Image source={favImg}
          style={{height:25,width: 25,position:'absolute',top:15,right:50}}
          />
          
          <Text style={{fontSize:14,fontFamily:FONT.bold,color:COLORS.purple,position:'absolute',top:55,right:40}}>{price}</Text>

          <Text style={[styles.text,extxtStyle]}>Pending</Text>

      </View>
         
         {/* <TouchableOpacity style={styles.bar}>
        <Entypo name="star" size={16} color="#FFC107" />
      <Text style={styles.rating}>{star}</Text>
    </TouchableOpacity> */}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
contaner:{
height:107,
width:352,
marginHorizontal:15,
borderRadius:8,
backgroundColor:'#FFFFFF',

   shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10
},

name:{
fontSize:10,
fontFamily:FONT.bold,
color:COLORS.purple,
// marginVertical:5,
},
txt:{
    fontFamily: FONT.regular,
    color:COLORS.gray,
    fontSize:8,
    lineHeight:12,
},

hrt:{
height:25,
width: 25,
backgroundColor:'#037F00B2',
borderRadius:50,
alignItems:'center',
justifyContent:'center',
position:'absolute',
top:85,
left:170
},
 location:{
    fontFamily:FONT.bold,
    color:COLORS.purple,
    fontSize:10,
},
rating:{
    fontFamily:FONT.semiBold,
    fontSize:10,
    
    },
  foodCont:{
    flexDirection:'row', 
    // borderRadius:10,
    gap:10
 
},
text:{fontFamily:FONT.regular,
  fontSize:10,color:COLORS.green, position:'absolute',bottom:10,right:50}
  
})