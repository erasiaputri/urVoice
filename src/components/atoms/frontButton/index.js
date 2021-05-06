import React from 'react'
import {TouchableOpacity,Text,View,StyleSheet} from 'react-native'

const ButtonOne = ({title,color,tColor,weight,onPress,radius}) => {

  const styles = StyleSheet.create({
    container:{borderRadius:radius,
      marginVertical:19,
      backgroundColor:color,
      height:55,
      width:133,
      justifyContent:'center',
      shadowColor: "#fff",
      shadowOffset: {
      	width: 2,
      	height: 2,
      },
      shadowOpacity: 100,
      shadowRadius: 1.00
    },
    text:{textAlign:'center',fontWeight:weight,fontSize:22,color:tColor}
  })

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>

  )

}

export default ButtonOne
