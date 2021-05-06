import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {BackButton} from '../../atoms'
import {LogoLeft,LineHeader} from '../../../assets'

const Header = ({title1,title2,color,onPress}) => {
  const style = StyleSheet.create({
    outer:{
      flex:1,
      paddingHorizontal:19,
      paddingTop:28,
    },
    container:{
      height:300,
      alignItems:'center',
      position:'relative',
      backgroundColor:color,
    },
    r:{
      position:'absolute',
      right:-59,
      top:-69,
      transform:[
          { rotateZ: "-180deg" },
          { rotateX: "-180deg" }],
    },
    leftPos:{
      marginTop:19,
    },
    line:{
      position:'absolute',
      top:'60%'
    },
    textCon:{
      position:'absolute',
      top:40,
    },
    text:{
      fontSize:64,
      color:"#873A3A",
    },
    text2:{
      fontSize:26,
      color:'#6C6B6B',
      textAlign:'center'
    },
  })
  return (
    <View style={style.outer}>
      <BackButton style={style.leftPos} onPress={onPress}/>
      <View style={style.container}>
        <View style={style.textCon}>
          <Text style={style.text}>{title1}</Text>
          <Text style={style.text2}>{title2}</Text>
        </View>
        <LogoLeft style={style.r} width={200} height={180}/>
        <LineHeader style={style.line}/>
      </View>
    </View>

  )
}

export default Header
