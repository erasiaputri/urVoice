import React,{useState} from 'react'
import {View,StyleSheet,Text,ScrollView} from 'react-native'
import {Header,Inputs,ButtonOne} from '../../components'
import FlashMessage,{showMessage} from 'react-native-flash-message'
import firebase from '../../config/firebase'

const SignUp = ({navigation}) => {
  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const submit=()=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res=>{
      const UserID = res.user.uid
      const datas = {
        fullname,email,password
      }

      firebase.database().ref(`users/${UserID}`).set(datas)
      setFullname('')
      setEmail('')
      setPassword('')
      navigation.navigate('Login')
    })
    .catch(err=>{
      showMessage({
        message:err.message,
        type:'default',
        backgroundColor:'#d9435e',
        color:"#fff"
      })
    })
  }

  return (
    <ScrollView>
      <View style={{flex:1,flexDirection:'column',backgroundColor:"#fff"}}>
        <Header title1="Ur-Voice" title2="music library" color="#fff" onPress={()=>navigation.navigate('Front')}/>
        <View style={{width:'100%',alignItems:'center',marginBottom:50}}>
          <Inputs holder="Fullname" bottom={20} value={fullname} onChangeText={value=>setFullname(value)}/>
          <Inputs holder="Email address" bottom={20} value={email} onChangeText={value=>setEmail(value)}/>
          <Inputs holder="Password" val={true} value={password} onChangeText={value=>setPassword(value)}/>
          <ButtonOne title='SIGN UP' tColor='#fff' color='#B2C8FF' radius={50} weight="bold" onPress={submit}/>
        </View>
        <FlashMessage position="top"/>
      </View>
    </ScrollView>
  )
}

export default SignUp
