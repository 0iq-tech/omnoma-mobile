import {reflect} from '@effector/reflect'
import {ResizeMode, Video} from 'expo-av'
import React from 'react'
import {View} from 'react-native'
import {useHideAnimation} from 'react-native-bootsplash'
import Animated from 'react-native-reanimated'
import {dimensions} from 'shared/measurements'
import {BootSplashState} from '../api'
import {
  createBootsplashStyles,
  useBootsplashAnimation,
  useVideoCompletion,
} from '../lib'
import {bootsplashScreenModel} from '../model'

interface Props {
  onAnimationEnd: () => void
  screenWidth: number
  screenHeight: number
}

function BootSplashScreen({onAnimationEnd, screenWidth, screenHeight}: Props) {
  const styles = createBootsplashStyles(screenWidth, screenHeight)
  const {isVideoFinished, handleVideoStatus, waitForVideoCompletion} =
    useVideoCompletion()
  const {animatedStyles, startAnimation} = useBootsplashAnimation()

  const {container} = useHideAnimation({
    manifest: require('../assets/manifest.json'),
    animate: async () => {
      await waitForVideoCompletion()
      await startAnimation(onAnimationEnd)
    },
  })

  return (
    <>
      <Animated.View {...container} style={[container.style, animatedStyles]}>
        <Animated.Image
          source={require('../assets/last_frame.png')}
          style={styles.fullScreenImage}
        />
      </Animated.View>
      {!isVideoFinished && (
        <View {...container}>
          <Video
            isLooping={false}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            source={require('../assets/splash_video.mp4')}
            style={styles.videoContainer}
            onPlaybackStatusUpdate={handleVideoStatus}
          />
        </View>
      )}
    </>
  )
}

export default reflect({
  view: BootSplashScreen,
  bind: {
    onAnimationEnd: () => {
      bootsplashScreenModel.setState(BootSplashState.HIDDEN)
    },
    screenWidth: dimensions.screen.staticWidth,
    screenHeight: dimensions.screen.staticHeight,
  },
})
