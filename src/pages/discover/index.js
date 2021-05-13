import React from 'react'
import {View,Text} from 'react-native'
import {MainHeader} from '../../components'

const Discover = () => {
  return (
    <View style={{backgroundColor:'#fff',flex:1,alignItems:'center'}}>
      <MainHeader/>
      <View>
        <Text>Hot Recommended</Text>
      </View>
    </View>
  )
}

export default Discover
