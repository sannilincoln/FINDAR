import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const EditIcon = () => {
  return (
        <TouchableOpacity
        style={{width:32,height:32,borderRadius:16,backgroundColor:COLORS.white,position:'absolute',top:30 ,right:115,alignItems:'center',justifyContent:'center'}}
            >
          <Octicons name="pencil" size={20} color={COLORS.purple}/>
         </TouchableOpacity>
  )
}

export default EditIcon

const styles = StyleSheet.create({})