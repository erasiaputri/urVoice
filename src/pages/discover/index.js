import React from 'react'
import {View,Text,ScrollView,FlatList} from 'react-native'
import {MainHeader,HotRecom,HotPlaylist} from '../../components'
import {BottomTabs} from '../../components'

const Discover = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff',flex:1,alignItems:'center',flexDirection:'column'}}>
      <MainHeader hasPhoto={true}/>
      <ScrollView>
        <View style={{paddingHorizontal:15,marginTop:20}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Hot Recommended</Text>
          <HotRecom/>
        </View>
        <View style={{paddingHorizontal:15,minHeight:400}}>
          <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Hot Playlist</Text>
          <HotPlaylist title='Comedy Playlist' img={1} number={241} color='#000'/>
          <HotPlaylist title='My Science List' img={2} number={100} color='#000'/>
          <HotPlaylist title='Sport Inspiration' img={3} number={241} color='#000'/>
          <HotPlaylist title='Life Journey' img={4} number={100} color='#000'/>
        </View>
      </ScrollView>
      <BottomTabs home={()=>navigation.navigate('Discover')}
        list={()=>navigation.navigate('Lists')}
        fav={()=>navigation.navigate('Favorites')}
        prof={()=>navigation.navigate('Profile')}/>
    </View>
  )
}

export default Discover
