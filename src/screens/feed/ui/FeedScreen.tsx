import {reflect} from '@effector/reflect'
import React from 'react'
import {Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

interface Props {}

function FeedScreen({}: Props) {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl text-black">Feed Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default reflect({
  view: FeedScreen,
  bind: {},
})
