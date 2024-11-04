import {reflect} from '@effector/reflect'
import React from 'react'
import {Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

interface Props {}

function HomeScreen({}: Props) {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white items-center justify-center">
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </SafeAreaView>
  )
}

export default reflect({
  view: HomeScreen,
  bind: {},
})
