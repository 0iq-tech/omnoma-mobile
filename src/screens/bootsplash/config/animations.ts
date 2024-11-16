import {
  Easing,
  WithSpringConfig,
  WithTimingConfig,
} from 'react-native-reanimated'

export const SPRING_CONFIG: WithSpringConfig = {
  damping: 15,
  stiffness: 100,
} as const

export const SCALE_TIMING_CONFIG: WithTimingConfig = {
  duration: 300,
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
} as const

export const OPACITY_TIMING_CONFIG: WithTimingConfig = {
  duration: 800,
  easing: Easing.bezier(0.4, 0, 0.2, 1),
} as const
