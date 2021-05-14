import React,{useState} from 'react'
import {View,StyleSheet,Text,ScrollView} from 'react-native'
import {Header,Inputs,ButtonOne} from '../../components'
import firebase from '../../config/firebase'
import FlashMessage,{showMessage} from 'react-native-flash-message'

const Login = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPass] = useState('')

  const submit=()=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res=>{
      navigation.replace('Discover')
      setEmail('')
      setPass('')
    })
    .catch(err=>{
      console.log(err);
      showMessage({
        message:err.message,
        type:'default',
        backgroundColor:'#d9435e',
        color:'#fff'
      })
    })
  }


  return (
    <ScrollView>
      <View style={{flex:1,flexDirection:'column',backgroundColor:"#fff"}}>
        <Header title1="Ur-Voice" title2="music library" color="#fff" onPress={()=>navigation.navigate('Front')}/>
        <View style={{width:'100%',alignItems:'center',marginBottom:130}}>
          <Inputs holder="Email address" bottom={20} value={email} onChangeText={value=>setEmail(value)}/>
          <Inputs holder="Password" value={password} onChangeText={value=>setPass(value)}/>
          <ButtonOne title='LOGIN' tColor='#fff' color='#7688B6' radius={50} onPress={submit}/>
        </View>
      </View>
      <FlashMessage position="top"/>
    </ScrollView>
  )
}

export default Login
