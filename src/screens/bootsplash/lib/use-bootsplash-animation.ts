import {useCallback} from 'react'
import {
  AnimatedStyle,
  runOnJS,
  StyleProps,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import {
  OPACITY_TIMING_CONFIG,
  SCALE_TIMING_CONFIG,
  SPRING_CONFIG,
} from '../config'

interface BootsplashAnimationHook {
  animatedStyles: AnimatedStyle<StyleProps>
  startAnimation: (onComplete: () => void) => Promise<void>
}

export const useBootsplashAnimation = (): BootsplashAnimationHook => {
  const opacity = useSharedValue(1)
  const scale = useSharedValue(1)

  const animatedStyles = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
      transform: [{scale: scale.value}],
    }),
    [],
  )

  const startAnimation = useCallback(async (onComplete: () => void) => {
    const animations = [
      new Promise<void>((resolve) => {
        scale.value = withSequence(
          withSpring(1.02, SPRING_CONFIG),
          withTiming(0.98, SCALE_TIMING_CONFIG, () => {
            runOnJS(resolve)()
          }),
        )
      }),

      new Promise<void>((resolve) => {
        opacity.value = withTiming(0, OPACITY_TIMING_CONFIG, () => {
          runOnJS(resolve)()
        })
      }),
    ]

    await Promise.all(animations)
    onComplete()
  }, [])

  return {
    animatedStyles,
    startAnimation,
  }
}
