import React,{useState} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {Header,Inputs,ButtonOne} from '../../components'
import FlashMessage,{showMessage} from 'react-native-flash-message'

const SignUp = ({navigation}) => {
  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const submit=()=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res=>{
      const UserID = res.user.uid
      const datas = {
        photo:photoBase64,fullname,email,password,job,date,title:'',price:'',text:''
      }

      if (res.user) {
        res.user.updateProfile({
          displayName: fullname,
          photoUrl: photo
        })
      }

      firebase.database().ref(`users/${UserID}`).set(datas)
      setFullname('')
      setEmail('')
      setPassword('')
      setJob('')
      setDate(new Date())
      nav.navigate('Login')
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
    <View style={{flex:1,flexDirection:'column',backgroundColor:"#fff"}}>
      <Header title1="Ur-Voice" title2="music library" color="#fff" onPress={()=>navigation.navigate('Front')}/>
      <View style={{width:'100%',position:'absolute',alignItems:'center',bottom:105}}>
        <Inputs holder="Email address" bottom={20}/>
        <Inputs holder="Password" bottom={20}/>
        <Inputs holder="confirm password"/>
        <ButtonOne title='SIGN UP' tColor='#fff' color='#B2C8FF' radius={50} weight="bold" onPress={submit}/>
      </View>
    </View>
  )
}

export default SignUp
