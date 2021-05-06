import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {Header,Inputs,ButtonOne} from '../../components'

const SignUp = ({navigation}) => {
  return (
    <View style={{flex:1,flexDirection:'column',backgroundColor:"#fff"}}>
      <Header title1="Ur-Voice" title2="music library" color="#fff" onPress={()=>navigation.navigate('Front')}/>
      <View style={{width:'100%',position:'absolute',alignItems:'center',bottom:105}}>
        <Inputs holder="Email address" bottom={20}/>
        <Inputs holder="Password" bottom={20}/>
        <Inputs holder="confirm password"/>
        <ButtonOne title='SIGN UP' tColor='#fff' color='#B2C8FF' radius={50} weight="bold"/>
      </View>
    </View>
  )
}

export default SignUp
