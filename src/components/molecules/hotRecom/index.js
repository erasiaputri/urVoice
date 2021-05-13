import React from 'react'
import {View,Text,ScrollView,Image} from 'react-native'
import {HotOne,HotTwo,HotThree,HotFour,HotUser} from '../../../assets'
import {RecItems} from '../../../components'

const HotRecom = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
      <View style={{ height: 250}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{width:320,height:250,justifyContent:'space-between',flexDirection:'column',marginRight:20}}>
            <Image source={HotOne} style={{width:'100%'}}/>
            <RecItems title='Journey to State' user='@rdizjcob'/>
          </View>
          <View style={{width:320,height:250,justifyContent:'space-between',flexDirection:'column',marginRight:20}}>
            <Image source={HotTwo} style={{width:'100%'}}/>
            <RecItems title='Art is me' user='@clemono2'/>
          </View>
          <View style={{width:320,height:250,justifyContent:'space-between',flexDirection:'column',marginRight:20}}>
            <Image source={HotThree} style={{width:'100%'}}/>
            <RecItems title='My Indian Friends' user='@jontyson'/>
          </View>
          <View style={{width:320,height:250,justifyContent:'space-between',flexDirection:'column'}}>
            <Image source={HotFour} style={{width:'100%'}}/>
            <RecItems title='Selected Fonts' user='@smnthu'/>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default HotRecom
