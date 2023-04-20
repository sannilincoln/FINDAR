import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout'
import { COLORS, FONT } from '../../constant/theme'
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Settings = ({navigation}) => {
  return (
   
    <View style={{flex:1,backgroundColor:COLORS.white}}>
        <View
        style={{width:'100%',height:184,backgroundColor:COLORS.purple}}
        />
        <View style={{flexDirection:'row', gap:10, position:'absolute', top:45,left:20,alignItems:'center' }}>
            <TouchableOpacity
                            style={{width:26,height:25,borderRadius:13,backgroundColor:COLORS.pwhite,alignItems:'center',justifyContent:'center'}}
                            onPress={()=>navigation.goBack()}
            >
                <Image source={require('../../assets/Icons/arrowLeft.png')}/>
            </TouchableOpacity>
            <Text style={{fontFamily:FONT.bold,color:COLORS.pwhite,}}>Settings</Text>
        </View>

        <View style={styles.card}>
            <Image source={require('../../assets/profileImage.png')}
            style={{width:100,height:100,position:'absolute',top:-40}}
            />
            <View
            style={{alignItems:'center',justifyContent:'center',marginTop:30, gap:10}}
            >
            <Text style={{fontFamily:FONT.medium,color:COLORS.purple,fontSize:19, }}>Olorunfemi Praise</Text>
            </View>            
           </View>

            <View style={styles.card2}>
            
                <View style={{marginTop:20}}>
                    <Text style={{fontFamily:FONT.medium,color:COLORS.textBlack,marginVertical:10,fontSize:16}}>Options</Text>

                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginVertical:15}}>
                        <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
                            <Image source={require('../../assets/Icons/bell.png')}/>
                            <Text style={{fontFamily:FONT.regular,color:COLORS.textBlack, }}>Notifications</Text>
                        </View>
                        <View style={{width:41,height:16,backgroundColor:COLORS.gray, borderRadius:8,justifyContent:'center',alignItems:'center'}}>
                            
                            <View style={{width:20,height:20,borderRadius:10,backgroundColor:COLORS.green,alignSelf:'flex-end'}}/>
                        </View>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginVertical:15}}>
                        <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
                            <Image source={require('../../assets/Icons/theme.png')}/>
                            <Text style={{fontFamily:FONT.regular,color:COLORS.textBlack,fontSize:16, }}>Theme</Text>
                        </View>
                        <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
                            <Text style={{fontFamily:FONT.regular,color:COLORS.gray,fontSize:13.33, alignSelf:'center'}}>Default</Text>
                            <Image source={require('../../assets/Icons/caretRight.png')}/>
                        </View>
                        </View>

                </View>


                <View style={{marginTop:20}}>

               <Text style={{fontFamily:FONT.medium,color:COLORS.textBlack,marginVertical:10,fontSize:16}}>Account</Text>

                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginVertical:10}}>
                <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
                    <Image source={require('../../assets/Icons/person.png')}/>
                    <Text style={{fontFamily:FONT.regular,color:COLORS.textBlack, }}>Personal Information</Text>
                </View>
                <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
                    {/* <Text style={{fontFamily:FONT.regular,color:COLORS.gray,fontSize:13.33, alignSelf:'center'}}>Default</Text> */}
                     <Image source={require('../../assets/Icons/caretRight.png')}/>
                </View>
                </View>
                </View>


                <View style={{marginTop:20}}>

               <Text style={{fontFamily:FONT.medium,color:COLORS.textBlack,fontSize:16,marginVertical:10}}>Privacy</Text>
               
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginVertical:10}}>
                <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
                    <Image source={require('../../assets/Icons/lock.png')}/>
                    <Text style={{fontFamily:FONT.regular,color:COLORS.textBlack,}}>Password</Text>
                </View>
                <TouchableOpacity style={{flexDirection:'row',gap:10,alignItems:'center'}}
                 onPress={()=>navigation.navigate('RetrievePw')}
                >
                    <Text style={{fontFamily:FONT.regular,color:COLORS.gray,fontSize:13.33, alignSelf:'center', }}>Change Password</Text>
                     <Image source={require('../../assets/Icons/caretRight.png')}/>
                </TouchableOpacity>
                </View>
                </View>


               </View>

          
    </View>

  
  )
}

export default Settings

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
    card2:{width:335,height:490,backgroundColor:COLORS.pwhite,borderRadius:15,
        alignSelf:'center', gap:10,marginTop:120,padding:20,
         shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10
    },
   

})