import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import {MainHeader} from '../../components'
import {ProfPic} from '../../assets'
import {BottomTabs,HotPlaylist} from '../../components'

const Profile = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'#28253A',flexDirection:'column',alignItems:'center'}}>
      <MainHeader hasTitle={true}/>
      <ScrollView horizontal={true}>
        <HotPlaylist title='Comedy Playlist' img={1} number={241} color='#fff'/>
        <HotPlaylist title='My Science List' img={2} number={100} color='#fff'/>
        <HotPlaylist title='Sport Inspiration' img={3} number={241} color='#fff'/>
        <HotPlaylist title='Life Journey' img={4} number={100} color='#fff'/>
      </ScrollView>
      <BottomTabs
        hasChange={true}
        home={()=>navigation.navigate('Discover')}
        list={()=>navigation.navigate('Lists')}
        fav={()=>navigation.navigate('Favorites')}
        prof={()=>navigation.navigate('Profile')}/>
    </View>
  )
}

export default Profile
