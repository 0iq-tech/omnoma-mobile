import React, {useCallback, useMemo} from 'react'
import {Pressable, PressableProps, StyleProp, ViewStyle} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

type StyledElement = React.ReactElement<{style?: StyleProp<ViewStyle>}>

type Props = Omit<PressableProps, 'children'> & {
  activeOpacity?: number
  style?: StyleProp<ViewStyle>
  children: StyledElement
  springConfig?: {
    damping?: number
    stiffness?: number
    mass?: number
  }
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export default function PressableOpacity({
  activeOpacity = 0.2,
  children,
  style,
  springConfig = {
    damping: 15,
    stiffness: 150,
    mass: 0.8,
  },
  ...props
}: Props) {
  const opacity = useSharedValue(1)

  const handlePressIn = useCallback(() => {
    opacity.value = activeOpacity
  }, [activeOpacity, opacity])

  const handlePressOut = useCallback(() => {
    opacity.value = 1
  }, [opacity])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withSpring(opacity.value, springConfig),
  }))

  const combinedStyle = useMemo(
    () => [style, animatedStyle],
    [style, animatedStyle],
  )

  const memoizedChild = useMemo(() => children, [children])

  return (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={combinedStyle}
      {...props}
    >
      {memoizedChild}
    </AnimatedPressable>
  )
}
