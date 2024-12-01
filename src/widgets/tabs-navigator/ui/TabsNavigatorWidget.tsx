import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {RouteProp} from '@react-navigation/native'
import React, {useCallback, useMemo} from 'react'
import {TabPapamList} from 'shared/navigation'
import {BASE_SCREEN_OPTIONS, SCREEN_COMPONENTS, SCREENS} from '../config'
import TabBarIcon from './TabBarIcon'

const {Navigator, Screen} = createBottomTabNavigator<TabPapamList>()

export default function TabsNavigatorWidget() {
  const screenOptions = useCallback(
    ({route}: {route: RouteProp<TabPapamList>}) => ({
      ...BASE_SCREEN_OPTIONS,
      tabBarIcon: ({color, size}: {color: string; size: number}) => (
        <TabBarIcon name={route.name} color={color} size={size} />
      ),
    }),
    [],
  )

  const screens = useMemo(
    () =>
      SCREENS.map((name) => (
        <Screen key={name} name={name} component={SCREEN_COMPONENTS[name]} />
      )),
    [],
  )

  return <Navigator screenOptions={screenOptions}>{screens}</Navigator>
}
