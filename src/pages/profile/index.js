import React,{useState,useEffect} from 'react'
import {View,Text,Image,StyleSheet,ScrollView} from 'react-native'
import {MainHeader} from '../../components'
import {ProfPic,Prof} from '../../assets'
import {BottomTabs,HotPlaylist} from '../../components'
import firebase from '../../config/firebase'

const Profile = ({navigation}) => {
  const [currentUser,setCurrentUser] = useState()
  const [profile,setProfile] = useState({})

  const users = firebase.auth().currentUser

  useEffect(()=>{
    firebase.database().ref(`/users/${users.uid}`).on('value',res=>{
      setProfile({...res.val()})
    })
  },[])
  return (
    <View style={{flex:1,backgroundColor:'#28253A',flexDirection:'column',alignItems:'center'}}>
      <MainHeader hasTitle={true} title='Profile' color='#fff'/>
      <ScrollView>
          {
            users &&
            <View style={{alignItems:'center',marginTop:40}}>
              <View style={style.imgCont}>
                <Prof/>
              </View>
              <Text style={style.text1}>{profile.fullname}</Text>
            </View>
          }
        <View style={{width:'100%',alignItems:'center',marginTop:30,marginBottom:60}}>
          <View style={{flexDirection:'row',alignItems:'center',width:250,justifyContent:'space-between'}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:24,color:'#fff'}}>24</Text>
              <Text style={{fontSize:18,color:'#fff'}}>Playlists</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:24,color:'#fff'}}>158</Text>
              <Text style={{fontSize:18,color:'#fff'}}>Likes</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:24,color:'#fff'}}>503</Text>
              <Text style={{fontSize:18,color:'#fff'}}>Following</Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal:20,minHeight:300,marginBottom:30}}>
          <Text style={{fontSize:18,fontWeight:'bold',marginBottom:30,color:'#fff'}}>Hot Playlist</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HotPlaylist title='Comedy Playlist' img={1} number={241} color='#fff'/>
            <HotPlaylist title='My Science List' img={2} number={100} color='#fff'/>
            <HotPlaylist title='Sport Inspiration' img={3} number={241} color='#fff'/>
            <HotPlaylist title='Life Journey' img={4} number={100} color='#fff'/>
          </ScrollView>
        </View>
      </ScrollView>
      <BottomTabs
        hasChange={true}
        home={()=>navigation.navigate('Discover')}
        list={()=>navigation.navigate('Lists')}
        fav={()=>navigation.navigate('Favorites')}
        prof={()=>navigation.navigate('Profile')}
        color='#fff'/>
    </View>
  )
}

export default Profile

const style = StyleSheet.create({
  text1:{
    fontWeight:'bold',
    fontSize:21,
    fontFamily:'Cairo-SemiBold',
    color:'#fff',
    marginVertical:20,
    letterSpacing:1
  }
})
