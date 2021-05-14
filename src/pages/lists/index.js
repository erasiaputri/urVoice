import React from 'react'
import {View,Text,ScrollView,FlatList} from 'react-native'
import {MainHeader,HotRecom,HotPlaylist} from '../../components'
import {BottomTabs} from '../../components'

const Discover = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff',flex:1,alignItems:'center',flexDirection:'column'}}>
      <MainHeader hasTitle={true} title='Lists' color='#000' hasPhoto={true}/>
      <ScrollView>
        <View style={{paddingHorizontal:15,height:400,minWidth:370,marginTop:30}}>
          <Text style={{fontSize:18,fontWeight:'bold',marginBottom:20}}>Hot Playlist</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <HotPlaylist title='Comedy Playlist' img={1} number={241} color='#000' color2='#737373' name='Richard Tea'/>
            <HotPlaylist title='My Science List' img={2} number={100} color='#000' color2='#737373' name='Bailey Wonger'/>
          </View>
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
