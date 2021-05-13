import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import {MainHeader,HotRecom} from '../../components'

const Discover = () => {
  return (
    <View style={{backgroundColor:'#fff',flex:1,alignItems:'center'}}>
      <MainHeader/>
      <View>
        <Text>Hot Recommended</Text>
        <HotRecom/>
      </View>
    </View>
  )
}

export default Discover
