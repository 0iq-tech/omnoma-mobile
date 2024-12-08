import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'
import {CameraView} from 'expo-camera'
import {cssInterop} from 'nativewind'

cssInterop(CameraView, {className: 'style'})
cssInterop(Ionicons, {className: 'style'})
cssInterop(MaterialCommunityIcons, {className: 'style'})
