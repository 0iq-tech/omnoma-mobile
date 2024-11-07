import {reflect} from '@effector/reflect'
import {ResizeMode, Video} from 'expo-av'
import React, {useState} from 'react'
import {Dimensions, StyleSheet, View} from 'react-native'
import {useHideAnimation} from 'react-native-bootsplash'
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import {sleep} from 'shared/lib'
import {BootSplashState} from '../api'
import {bootsplashScreenModel} from '../model'

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window')

interface Props {
  onAnimationEnd: () => void
}

function AnimatedBootSplashScreen({onAnimationEnd}: Props) {
  const [isVideoFinished, setIsVideoFinished] = useState(false)
  const opacity = useSharedValue(1)
  const scale = useSharedValue(1)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{scale: scale.value}],
    }
  })

  const {container} = useHideAnimation({
    manifest: require('../assets/manifest.json'),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,
    animate: async () => {
      await sleep(2540)

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
          runOnJS(onAnimationEnd)()
        },
      )
    },
  })

  return (
    <>
      <Animated.View {...container} style={[container.style, animatedStyles]}>
        <Animated.Image
          source={require('../assets/last_frame.png')}
          style={styles.fullScreen}
        />
      </Animated.View>
      {!isVideoFinished && (
        <View {...container}>
          <Video
            isLooping={false}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            source={require('../assets/splash_video.mp4')}
            style={StyleSheet.absoluteFill}
            onPlaybackStatusUpdate={(status) => {
              if (status.isLoaded && status.didJustFinish) {
                setIsVideoFinished(true)
              }
            }}
          />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

export default reflect({
  view: AnimatedBootSplashScreen,
  bind: {
    onAnimationEnd: () => {
      bootsplashScreenModel.setState(BootSplashState.HIDDEN)
    },
  },
})
