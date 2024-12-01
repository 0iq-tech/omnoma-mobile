import {FontAwesome} from '@expo/vector-icons'
import React, {memo} from 'react'
import {TAB_ICONS} from '../lib'

interface Props {
  name: keyof typeof TAB_ICONS
  color: string
  size: number
}

const TabBarIcon = memo(function TabBarIcon({name, color, size}: Props) {
  return <FontAwesome name={TAB_ICONS[name]} size={size} color={color} />
})

export default TabBarIcon
