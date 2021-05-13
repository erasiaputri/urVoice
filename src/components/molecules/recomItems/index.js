import React from 'react'
import {View} from 'react-native'
import {HotUser} from '../../../assets'
import {UserItems} from '../../atoms'

const RecItems = ({title,user}) => {
  return (
    <View style={{flex:1,flexDirection:'row',marginTop:10}}>
      <HotUser height={40} width={40}/>
      <UserItems hotTitle={title} username={user}/>
    </View>
  )
}

export default RecItems
