import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Splash,Front,Login,SignUp,Discover} from '../pages'

const Stack = createStackNavigator();

const Router = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Front" component={Front} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="Discover" component={Discover} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
export default Router;
