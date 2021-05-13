import React from 'react'
import {TextInput,View,StyleSheet} from 'react-native'

const Inputs = ({holder,bottom,value,onChangeText,val}) => {
  const style = StyleSheet.create({
    input:{
      height:60,
      width:337,
      borderRadius:50,
      textAlign:'center',
      alignItems:'center',
      borderWidth:1,
      marginBottom:bottom
    }
  })
  return (
    <TextInput placeholder={holder} style={style.input} value={value} onChangeText={onChangeText} secureTextEntry={val}/>
  )
}

export default Inputs
