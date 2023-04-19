import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StarRating = () => {
  return (
    <View style={{flexDirection:'row',gap:5}}>
            <Image source={require('../assets/Icons/star.png')} />
            <Image source={require('../assets/Icons/star.png')} />
            <Image source={require('../assets/Icons/star.png')} />
            <Image source={require('../assets/Icons/star.png')} />
            <Image source={require('../assets/Icons/star.png')} />
            </View>
  )
}

export default StarRating

const styles = StyleSheet.create({})