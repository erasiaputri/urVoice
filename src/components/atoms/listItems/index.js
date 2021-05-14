import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {PlayIcon} from '../../../assets'

const ListItems = ({text,text2}) => {
  return(
    <View style={{width:170,alignItems:"center",justifyContent:'space-between',flexDirection:"row",marginBottom:25}}>
      <TouchableOpacity>
        <PlayIcon height={30} width={30}/>
      </TouchableOpacity>
      <View style={{flex:.9}}>
        <Text>{text}</Text>
        <Text>{text2}</Text>
      </View>
    </View>
  )
}

export default ListItems
