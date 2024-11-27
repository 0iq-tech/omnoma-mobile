import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export const withSafeArea = (node: () => React.ReactNode) => {
  const SafeAreaWrapper = () => <SafeAreaProvider>{node()}</SafeAreaProvider>
  SafeAreaWrapper.displayName = 'SafeAreaWrapper'
  return SafeAreaWrapper
}
