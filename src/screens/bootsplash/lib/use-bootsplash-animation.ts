import {useCallback} from 'react'
import {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

interface BootsplashAnimationHook {
  animatedStyles: any
  startAnimation: (onComplete: () => void) => Promise<void>
}

export const useBootsplashAnimation = (): BootsplashAnimationHook => {
  const opacity = useSharedValue(1)
  const scale = useSharedValue(1)

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: scale.value}],
  }))

  const startAnimation = useCallback(async (onComplete: () => void) => {
    scale.value = withSequence(
      withSpring(1.02, {
        damping: 15,
        stiffness: 100,
      }),
      withTiming(0.98, {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    )

    opacity.value = withTiming(
      0,
      {
        duration: 800,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      },
      () => {
        runOnJS(onComplete)()
      },
    )
  }, [])

  return {
    animatedStyles,
    startAnimation,
  }
}
