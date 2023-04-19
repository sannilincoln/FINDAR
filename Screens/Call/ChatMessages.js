import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../../constant/theme'
import ChatViewSender from '../../Components/ChatViewSender'
import ChatViewReceiver from '../../Components/ChatViewReceiver'
import ChatViewSenderImg from '../../Components/ChatViewSenderImg'
import ChatTxtBox from '../../Components/ChatTxtBox'

const ChatMessages = () => {
  return (
     <View style={{backgroundColor:COLORS.white,flex:1}}>

        <View style={{flexDirection:'row', alignItems:'center',marginLeft:20, marginTop:40, gap:20}}>
                <TouchableOpacity
                            style={{width:26,height:25,borderRadius:13,backgroundColor:COLORS.white,alignItems:'center',justifyContent:'center'}}
            >
                <Image source={require('../../assets/Icons/arrowLeft.png')}/>
            </TouchableOpacity>
                <Image source={require('../../assets/tailor.png')}
                style={{width:56, height:56,borderRadius:28, marginVertical:15}}
                />
                <View style={{flexDirection:'column',gap:5}}>
                <Text style={{fontSize:16,fontFamily:FONT.bold,color:COLORS.purple}}>Jane Fashion Home</Text>
                <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
                    <View style={{width:8,height:8,borderRadius:4,backgroundColor:COLORS.green}}/>
                <Text style={{fontSize:11.11,fontFamily:FONT.regular,color:COLORS.gray}}>Online now</Text>

                </View>
                </View>
                </View>
                <View style={{height:1,width:'100%',backgroundColor:COLORS.gray, marginVertical:0}}/>

            <Text style={{fontFamily:FONT.regular,color:COLORS.gray,textAlign:'center',marginVertical:10}}>Today 9:05 am</Text>


            <ChatViewSender
            text={'Good morning Jane, I have some clothes i want to sew'}
            />

            <ChatViewReceiver
            text={'Good morning ma, I’ll be available by 12noon to come and pick them'}
            />

            <ChatViewSender
            text={'I can work with 12noon I will be expecting your arrival'}
            />
            <ChatViewReceiver
            text={'I will put a call across when I am on my way'}
            />
            
            <ChatViewSenderImg
            image={require('../../assets/chatImage.png')}
            />
            <ChatViewSender
            text={'I want to sew this style too'}
            />

            <ChatTxtBox
            placeholder={'Type....'}
            />

    </View>
  )
}

export default ChatMessages

const styles = StyleSheet.create({})