import {createEvent, createStore, sample} from 'effector'
import {useEffect} from 'react'
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context'

export const setSafeAreaInsets = createEvent<EdgeInsets>()

export const $top = createStore<number>(0)
export const $right = createStore<number>(0)
export const $bottom = createStore<number>(0)
export const $left = createStore<number>(0)

const commonFilter = (safeAreaInset: EdgeInsets) => !!safeAreaInset

sample({
  clock: setSafeAreaInsets,
  filter: commonFilter,
  fn: ({top}) => top,
  target: $top,
})

sample({
  clock: setSafeAreaInsets,
  filter: commonFilter,
  fn: ({right}) => right,
  target: $right,
})

sample({
  clock: setSafeAreaInsets,
  filter: commonFilter,
  fn: ({bottom}) => bottom,
  target: $bottom,
})

sample({
  clock: setSafeAreaInsets,
  filter: commonFilter,
  fn: ({left}) => left,
  target: $left,
})

export function useSafeAreaMeasurement() {
  const edgeInsets = useSafeAreaInsets()

  useEffect(() => {
    setSafeAreaInsets(edgeInsets)
  }, [edgeInsets])
}

export const safeArea = {
  $bottom,
  $left,
  $right,
  $top,
}
