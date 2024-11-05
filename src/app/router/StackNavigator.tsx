import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {CameraScreen} from 'screens/camera'
import {HomeScreen} from 'screens/home'
import {routeNames, StackParamList} from 'shared/navigation'

const {Navigator, Screen} = createNativeStackNavigator<StackParamList>()

export default function StackNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'simple_push',
      }}>
      <Screen name={routeNames.home} component={HomeScreen} />
      <Screen name={routeNames.camera} component={CameraScreen} />
    </Navigator>
  )
}
