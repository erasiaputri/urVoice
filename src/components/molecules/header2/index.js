import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
import {BurgerBtn,User,Setting} from '../../../assets'

const MainHeader = ({hasPhoto,hasTitle}) => {
  return (
    <View style={{alignItems:'center',height:100,width:348,flexDirection:'row',justifyContent:'space-between'}}>
      <BurgerBtn/>
      {
        !hasTitle &&
        <View style={style.inputContainer}>
          <TextInput
            style={{fontSize: 18}}
            placeholder="Search for food"
          />
        </View>
      }
      {
        hasTitle && <Text style={{fontSize:26,fontWeight:'bold',color:'#fff'}}>Profile</Text>
      }

      {
        hasPhoto && <User/>
      }
      {
        !hasPhoto && <Setting/>
      }
    </View>
  )
}

export default MainHeader

const style = StyleSheet.create({
  inputContainer: {
    height: 50,
    width:197,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    borderColor:'#F3F3F3',
    paddingHorizontal: 20,
    borderWidth:1
  }
})
