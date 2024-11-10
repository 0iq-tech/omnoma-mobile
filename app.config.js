const IS_DEV = process.env.APP_VARIANT === 'development'
const IS_PREVIEW = process.env.APP_VARIANT === 'preview'

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.omnoma.mobile.dev'
  }

  if (IS_PREVIEW) {
    return 'com.omnoma.mobile.preview'
  }

  return 'com.omnoma.mobile'
}

const getAppName = () => {
  if (IS_DEV) {
    return 'Omnoma (Dev)'
  }

  if (IS_PREVIEW) {
    return 'Omnoma (Preview)'
  }

  return 'Omnoma'
}

export default {
  name: getAppName(),
  expo: {
    name: 'omnoma-mobile',
    slug: 'omnoma-mobile',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    plugins: [
      [
        'react-native-bootsplash',
        {
          android: {
            parentTheme: 'EdgeToEdge',
          },
        },
      ],
      'react-native-edge-to-edge',
      'expo-av',
      [
        'expo-camera',
        {
          cameraPermission: 'Allow $(PRODUCT_NAME) to access your camera',
          microphonePermission:
            'Allow $(PRODUCT_NAME) to access your microphone',
          recordAudioAndroid: false,
        },
      ],
    ],
    ios: {
      bundleIdentifier: getUniqueIdentifier(),
      supportsTablet: true,
    },
    android: {
      package: getUniqueIdentifier(),
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      permissions: [
        'android.permission.CAMERA',
        'android.permission.RECORD_AUDIO',
        'android.permission.MODIFY_AUDIO_SETTINGS',
      ],
    },
    web: {
      favicon: './assets/favicon.png',
      bundler: 'metro',
    },
    extra: {
      eas: {
        projectId: '0172f579-0cf7-4086-90cb-9ff3c43726a8',
      },
    },
    owner: '0iq-tech',
    updates: {
      url: 'https://u.expo.dev/0172f579-0cf7-4086-90cb-9ff3c43726a8',
    },
    runtimeVersion: '1.0.0',
  },
}
