import React from 'react'
import {Text} from 'react-native'

const PlaylistTitle = ({title,color}) => {
  return (
    <Text style={{color:color}}>{title}</Text>
  )
}

export default PlaylistTitle
