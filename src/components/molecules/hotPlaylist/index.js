import React from 'react'
import {View,Text,Image} from 'react-native'
import {HotPlaylistOne,HotPlaylistTwo,HotPlaylistThree,HotPlaylistFour,HotTwo,Favorite,Tracks} from '../../../assets'
import {PlaylistTitle} from '../../../components'

const HotPlaylist = ({img,title,number,number2,color}) => {
  let image;
  if (img==1) {
    image = <Image source={HotPlaylistOne} style={{height:159,width:150}}/>
  } else if (img==2) {
    image = <Image source={HotPlaylistTwo} style={{height:159,width:150}}/>
  } else if (img==3) {
    image = <Image source={HotPlaylistThree} style={{height:159,width:150}}/>
  } else{
    image = <Image source={HotPlaylistFour} style={{height:159,width:150}}/>
  }
  return (
    <View>
      {image}
      <PlaylistTitle title={title} color={color}/>
      <View style={{flexDirection:'row',width:180,marginBottom:20}}>
        <View style={{flexDirection:'row',width:'30%',alignItems:'center',justifyContent:'space-between'}}>
          <Favorite height={27} width={25} stroke='#fff'/>
          <Text style={{color:color}}>{number}</Text>
        </View>
        <View style={{flexDirection:'row',width:'30%',marginLeft:10,alignItems:'center',justifyContent:'space-between'}}>
          <Tracks height={27} width={25} stroke='#aaa'/>
          <Text style={{color:color}}>{number2} tracks</Text>
        </View>
      </View>
    </View>
  )
}

export default HotPlaylist
