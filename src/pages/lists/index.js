import React from 'react'
import {View,Text,ScrollView,TouchableOpacity} from 'react-native'
import {MainHeader,HotRecom,HotPlaylist} from '../../components'
import {BottomTabs,ListItems} from '../../components'
import {PlayIcon} from '../../assets'

const Lists = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff',flex:1,alignItems:'center',flexDirection:'column'}}>
      <MainHeader hasTitle={true} title='Lists' color='#000' hasPhoto={true}/>
      <ScrollView>
        <View style={{paddingHorizontal:15,height:300,minWidth:370,marginTop:30}}>
          <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Hot Playlist</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <HotPlaylist title='Comedy Playlist' img={1} number={241} color='#000' color2='#737373' name='Richard Tea'/>
            <HotPlaylist title='My Science List' img={2} number={100} color='#000' color2='#737373' name='Bailey Wonger'/>
          </View>
        </View>
        <View style={{paddingHorizontal:15,height:400,minWidth:370}}>
          <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Hot Playlists</Text>
          <ListItems text='SmoothCast' text2='Smoosh & Ramble'/>
          <ListItems text='Giving My Bed' text2='Parsley Montana'/>
          <ListItems text='Golden Dreams' text2='Ingredien Nutrisha'/>
          <ListItems text='Come With Me' text2='Gustav Papleson'/>
          <ListItems text='I Miss You' text2='Rodney Artichoke'/>
          <ListItems text='Journey to State' text2='Riddle Jacob'/>
        </View>
      </ScrollView>
      <BottomTabs home={()=>navigation.navigate('Discover')}
        list={()=>navigation.navigate('Lists')}
        fav={()=>navigation.navigate('Favorites')}
        prof={()=>navigation.navigate('Profile')}/>
    </View>
  )
}

export default Lists
