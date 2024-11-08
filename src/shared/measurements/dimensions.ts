import {createEvent, createStore, sample} from 'effector'
import {useEffect, useState} from 'react'
import {Dimensions, ScaledSize} from 'react-native'

type DimensionsState = {
  window: ScaledSize
  screen: ScaledSize
}

const initialDimensions: DimensionsState = {
  window: Dimensions.get('window'),
  screen: Dimensions.get('screen'),
}

export const setScreenDimensions = createEvent<ScaledSize>()
export const setWindowDimensions = createEvent<ScaledSize>()

const $screen = createStore<ScaledSize>(initialDimensions.screen)
const $window = createStore<ScaledSize>(initialDimensions.window)

sample({
  clock: setScreenDimensions,
  target: $screen,
})

sample({
  clock: setWindowDimensions,
  target: $window,
})

export function useDimensions() {
  const [dimensions, setDimensions] =
    useState<DimensionsState>(initialDimensions)

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen})
        setWindowDimensions(window)
        setScreenDimensions(screen)
      },
    )

    return () => subscription.remove()
  }, [])

  return dimensions
}

export const dimensions = {
  screen: {
    $height: $screen.map((s) => s.height),
    $width: $screen.map((s) => s.width),
    staticHeight: initialDimensions.screen.height,
    staticWidth: initialDimensions.screen.width,
  },
  window: {
    $height: $window.map((s) => s.height),
    $width: $window.map((s) => s.width),
    staticHeight: initialDimensions.window.height,
    staticWidth: initialDimensions.window.width,
  },
}
