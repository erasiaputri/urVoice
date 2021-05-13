import React from 'react'
import {View,Text} from 'react-native'

const UserItems = ({hotTitle,username}) => {
  return (
    <View style={{alignItems:'flex-start'}}>
      <Text>{hotTitle}</Text>
      <Text>{username}</Text>
    </View>
  )
}

export default UserItems
