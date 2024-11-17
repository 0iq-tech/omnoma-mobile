import {FontAwesome} from '@expo/vector-icons'
import React from 'react'
import {TAB_ICONS} from '../lib'

export const TabBarIcon = React.memo(
  ({
    name,
    color,
    size,
  }: {
    name: keyof typeof TAB_ICONS
    color: string
    size: number
  }) => <FontAwesome name={TAB_ICONS[name]} size={size} color={color} />,
)
