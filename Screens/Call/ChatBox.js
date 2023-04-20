import { Image, Pressable, StyleSheet, Text, TouchableOpacity,  View } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../../constant/theme'
import TextBox from '../../Components/TextBox'
import { FontAwesome5 } from '@expo/vector-icons';
import ChatCard from '../../Components/ChatCard';


const ChatBox = ({navigation}) => {
  return (
        <View style={{backgroundColor:COLORS.white,flex:1}}>

          <View style={{flexDirection:'row',position:'absolute', top:60,left:20,alignItems:'center' }}>
            <View 
            style={{flexDirection:'row', alignItems:'center',gap:10,}}>
            <TouchableOpacity
             style={{width:26,height:25,borderRadius:13,backgroundColor:COLORS.white,alignItems:'center',justifyContent:'center'}}
            onPress={() => navigation.goBack()}
            >
                <Image source={require('../../assets/Icons/arrowLeft.png')}/>
            </TouchableOpacity>
            <Text style={{fontFamily:FONT.bold,  color:COLORS.purple,}}>Messages</Text>
            </View>

            <Image source={require('../../assets/profileImage.png')}
            style={{width:32, height:32,borderRadius:16, marginLeft:220 }}
            />
        </View>
        
        <TextBox
        placeholder={"Search"}
        extContStyle={{marginTop:90, marginHorizontal:20}}
        />

        <Pressable
        onPress={()=>navigation.navigate('ChatMessages')}
        >
        <ChatCard
        image={require('../../assets/tailor.png')}
        bussinessname={'Jane Fashion Home'}
        chat={'Can you come around tomorrow?'}
        time={'8:45am'}
        />
        </Pressable>
        

        <Pressable
        onPress={()=>navigation.navigate('ChatMessages')}
        >
        <ChatCard
        image={require('../../assets/barber.png')}
        bussinessname={'John The Barder'}
        chat={'I love the job you did for me'}
        time={'Yesterday'}
        extOnline={{backgroundColor:COLORS.gray}}
        />
        </Pressable>


        <Pressable
        onPress={()=>navigation.navigate('ChatMessages')}>
        <ChatCard
        image={require('../../assets/spa.png')}
        bussinessname={'Oyin’s Hairmpire'}
        chat={'When will you be available to rela.....'}
        time={'19/08/22'}
        />
        </Pressable>


        <Pressable
        onPress={()=>navigation.navigate('ChatMessages')}>

        <ChatCard
        image={require('../../assets/plumber.png')}
        bussinessname={'Everything Plumbing'}
        chat={'It is a pleasure doing business wi.......'}
        time={'15/08/22'}
                extOnline={{backgroundColor:COLORS.gray}}
        />
        </Pressable>

        <Pressable
        onPress={()=>navigation.navigate('ChatMessages')}>
        <ChatCard
        image={require('../../assets/shoemaker.png')}
        bussinessname={'Shoe Affairs'}
        chat={'Shoe Affairs'}
        time={'12/08/22'}
        />
        </Pressable>
      
         


        
    </View>
  )
}

export default ChatBox

const styles = StyleSheet.create({
   
})