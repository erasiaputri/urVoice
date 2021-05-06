import React from 'react'
import {TouchableOpacity} from 'react-native'
import {BackBtn} from '../../../assets'

const BackButton = ({onPress})=>{
  return(
    <TouchableOpacity style={{width:50,height:27}} onPress={onPress}>
      <BackBtn/>
    </TouchableOpacity>
  )
}

export default BackButton
