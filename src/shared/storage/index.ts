import AsyncStorage from '@react-native-async-storage/async-storage'
import {createEffect, createStore, sample} from 'effector'
import {handleErrorFx, LEVELS} from '../lib'

const checkStorageReadyFx = createEffect(async () => {
  await AsyncStorage.setItem('__test__', '1')
  await AsyncStorage.removeItem('__test__')
  return true
})

// handle error with fatal level

sample({
  clock: checkStorageReadyFx.failData,
  fn: (error) => ({
    error,
    level: LEVELS.FATAL,
    context: {
      source: 'checkStorageReadyFx',
    },
  }),
  target: handleErrorFx,
})

const $isReady = createStore(false)

sample({
  clock: checkStorageReadyFx.doneData,
  target: $isReady,
})

const clearFx = createEffect(async () => {
  await AsyncStorage.clear()
})

// handle error with fatal level

sample({
  clock: clearFx.failData,
  fn: (error) => ({
    error,
    level: LEVELS.FATAL,
    context: {
      source: 'clearFx',
    },
  }),
  target: handleErrorFx,
})

export const storage = {clearFx, $isReady, checkStorageReadyFx}
