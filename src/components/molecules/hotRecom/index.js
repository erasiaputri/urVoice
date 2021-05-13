import React from 'react'
import {View,Text,ScrollView,Image} from 'react-native'
import {HotOne,HotTwo,HotThree,HotFour,HotUser} from '../../../assets'

const HotRecom = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
      <View style={{ height: 200}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{width:340,justifyContent:'space-between',flexDirection:'column'}}>
            <Image source={HotOne} style={{width:'100%'}}/>
            <View style={{flex:1,flexDirection:'row'}}>
              <HotUser height={40} width={40}/>
              <View style={{alignItems:'flex-start'}}>
                <Text>Journey to State</Text>
                <Text>@ridzjcob</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default HotRecom
