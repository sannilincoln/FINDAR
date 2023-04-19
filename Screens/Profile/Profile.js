import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Profile = () => {
  return (
   
    <View style={{flex:1,backgroundColor:COLORS.white}}>
        <View
        style={{width:'100%',height:184,backgroundColor:COLORS.purple}}
        />
        <View style={{flexDirection:'row', gap:10, position:'absolute', top:45,left:20,alignItems:'center' }}>
            <View
                style={{width:26,height:25,borderRadius:13,backgroundColor:COLORS.pwhite,alignItems:'center',justifyContent:'center'}}
            >
                <Image source={require('../../assets/Icons/arrowLeft.png')}/>
            </View>
            <Text style={{fontFamily:FONT.bold,color:COLORS.pwhite,}}>My Profile</Text>
        </View>

        <View style={styles.card}>
            <Image source={require('../../assets/profileImage.png')}
            style={{width:100,height:100,position:'absolute',top:-40}}
            />
            <View
            style={{alignItems:'center',justifyContent:'center',marginTop:40, gap:10}}
            >
            <Text style={{fontFamily:FONT.medium,color:COLORS.purple,fontSize:19, }}>Olorunfemi Praise</Text>
            <Text style={{fontFamily:FONT.medium,color:COLORS.textBlack,fontSize:14, }}>Personal Information </Text>
            </View>


             <TouchableOpacity
        style={{width:32,height:32,borderRadius:16,backgroundColor:COLORS.white,position:'absolute',top:30 ,right:115,alignItems:'center',justifyContent:'center'}}
            >
          <Octicons name="pencil" size={20} color={COLORS.purple}/>
         </TouchableOpacity>
           </View>

            <View style={styles.card2}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',gap:10, alignItems:'center'}}>
                        <FontAwesome5 name="address-book" size={20} color={COLORS.gray} />    
                         <Text style={{fontFamily:FONT.medium,color:COLORS.gray,fontSize:14, }}>Home Address</Text>
                    </View>
                       <TouchableOpacity
        style={{width:32,height:32,borderRadius:16,backgroundColor:COLORS.white,alignItems:'center',justifyContent:'center'}}
            >
          <Octicons name="pencil" size={20} color={COLORS.purple}/>
         </TouchableOpacity>
                </View>
                <Text style={{fontFamily:FONT.regular,color:COLORS.textBlack,fontSize:13.33, }}>37, I’m going through a lot street, Sapa bus-stop, God Abeg, Lagos, Nigeria</Text>
            </View>

            <View style={styles.card3}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',gap:10, alignItems:'center'}}>
                        <FontAwesome5 name="mobile-alt" size={20} color={COLORS.gray} />    
                         <Text style={{fontFamily:FONT.medium,color:COLORS.gray,fontSize:14, }}>Phone Number</Text>
                    </View>
                       <TouchableOpacity
        style={{width:32,height:32,borderRadius:16,backgroundColor:COLORS.white,alignItems:'center',justifyContent:'center'}}
            >
          <Octicons name="pencil" size={20} color={COLORS.purple}/>
         </TouchableOpacity>
                </View>
                <Text style={{fontFamily:FONT.regular,color:COLORS.textBlack,fontSize:13.33, }}>0905-326-9125</Text>
            </View>

            <View style={styles.card4}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',gap:10, alignItems:'center'}}>
                        <MaterialCommunityIcons name="email-outline" size={20} color={COLORS.gray} />   
                         <Text style={{fontFamily:FONT.medium,color:COLORS.gray,fontSize:14, }}>Email Address</Text>
                    </View>
                       <TouchableOpacity
        style={{width:32,height:32,borderRadius:16,backgroundColor:COLORS.white,alignItems:'center',justifyContent:'center'}}
            >
          <Octicons name="pencil" size={20} color={COLORS.purple}/>
         </TouchableOpacity>
                </View>
                <Text style={{fontFamily:FONT.regular,color:COLORS.textBlack,fontSize:13.33, }}>praizeolorunfemi@gmail.com</Text>
            </View>

    </View>

  
  )
}

export default Profile

const styles = StyleSheet.create({
    card:{
        width:335,
        height:144,
        backgroundColor:COLORS.pwhite,        
        position:'absolute',
        top:120,
        left:30,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10
    
    },
    card2:{width:335,height:114,backgroundColor:COLORS.pwhite,borderRadius:15,
        alignSelf:'center', gap:10,marginTop:120,padding:15,
         shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10
    },
    card3:{width:335,height:96,backgroundColor:COLORS.pwhite,borderRadius:15,
        alignSelf:'center', gap:10,marginTop:30,padding:15,
         shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10
    },
    card4:{width:335,height:96,backgroundColor:COLORS.pwhite,borderRadius:15,
        alignSelf:'center', gap:10,marginTop:40,padding:15,
         shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10
    },

})