import {useColorScheme} from 'react-native'
import {DEFAULT_COLOR_SCHEME} from './const'

export const useIsDark = () => {
  return (useColorScheme() ?? DEFAULT_COLOR_SCHEME) === 'dark'
}
