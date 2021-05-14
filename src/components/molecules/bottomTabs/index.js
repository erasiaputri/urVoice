import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {Dashboard,Favorite,Lists,Profile,ProfActive,WhiteDash,WhiteFav,WhiteList} from '../../../assets'

const BottomTabs = ({home,list,fav,prof,hasChange,color}) => {
  const style = StyleSheet.create({
    center:{
      alignItems:'center'
    },
    container:{
      width:'100%',
      height:70,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around'
    },
    text:{
      color:color
    }
  })
  const {center,container} = style
  return (
    <View style={container}>
      <TouchableOpacity onPress={home}>
        <View style={center}>
          {
            hasChange && <WhiteDash/>
          }
          {
            !hasChange && <Dashboard/>
          }

          <Text style={style.text}>Discover</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={list}>
        <View style={center}>
          {
            hasChange && <WhiteList/>
          }
          {
            !hasChange && <Lists/>
          }

          <Text style={style.text}>Lists</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={fav}>
        <View style={center}>
          {
            hasChange && <WhiteFav/>
          }
          {
            !hasChange && <Favorite/>
          }

          <Text style={style.text}>Favorites</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={prof}>
        <View style={center}>
          {
            hasChange && <ProfActive/>
          }
          {
            !hasChange && <Profile/>
          }

          <Text style={style.text}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default BottomTabs
