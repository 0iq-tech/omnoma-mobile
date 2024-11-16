import {StyleSheet} from 'react-native'

export const createBootsplashStyles = (
  screenWidth: number,
  screenHeight: number,
) =>
  StyleSheet.create({
    fullScreenImage: {
      position: 'absolute',
      width: screenWidth,
      height: screenHeight,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    videoContainer: {
      ...StyleSheet.absoluteFillObject,
    },
  })
