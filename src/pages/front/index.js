import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {SplashLogoBlur,LogoLeft} from '../../assets'
import {ButtonOne} from '../../components'

const Front = ({navigation}) => {
  return (
    <View style={style.page}>
      <LogoLeft style={style.logo}/>
      <View style={style.tcontainer}>
        <Text style={style.text}>Ur-Voice</Text>
        <Text style={style.text2}>music library</Text>
      </View>
      <SplashLogoBlur style={style.logo2}/>
      <View style={style.btnCon}>
        <ButtonOne title='Sign In' tColor='#fff' color='#5B68DF' weight='bold' radius={10} onPress={()=>navigation.navigate('Login')}/>
        <ButtonOne title='Sign Up' tColor='#fff' color='#67BE24' weight='bold' radius={10} onPress={()=>navigation.navigate('SignUp')}/>
      </View>
    </View>
  )
}

export default Front;

const style = StyleSheet.create({
  page:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    position:'relative',
    flexDirection:'column'
  },
  tcontainer:{
    position:'absolute',
    top:230
  },
  text:{
    fontSize:64,
    color:"#873A3A",
    zIndex:1
  },
  text2:{
    fontSize:26,
    color:'#828282',
    zIndex:1,
    textAlign:'center'
  },
  logo:{
    position:'absolute',
    left:0,
    top:-50,
    zIndex:1
  },
  logo2:{
    height:514,
    width:414,
    position:'absolute',
    bottom:0
  },
  btnCon:{
    position:'absolute',
    bottom:139
  }
})
