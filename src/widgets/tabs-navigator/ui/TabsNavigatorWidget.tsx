import {reflect} from '@effector/reflect'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {RouteProp} from '@react-navigation/native'
import React, {useCallback, useMemo} from 'react'
import {safeArea} from 'shared/measurements'
import {tabNames, TabPapamList} from 'shared/navigation'
import {theme} from 'shared/theme'
import {SCREEN_COMPONENTS, SCREENS} from '../config'
import TabBarIcon from './TabBarIcon'
import {useTabOptions} from './use-tab-options'

const {Navigator, Screen} = createBottomTabNavigator<TabPapamList>()

interface Props {
  isDark: boolean
  safeAreaTop: number
}

function TabsNavigatorWidget({isDark}: Props) {
  const tabOptions = useTabOptions({isDark})

  const screenOptions = useCallback(
    ({route}: {route: RouteProp<TabPapamList>}) => ({
      ...tabOptions,
      tabBarIcon: ({color, size}: {color: string; size: number}) => (
        <TabBarIcon name={route.name} color={color} size={size} />
      ),
    }),
    [tabOptions],
  )

  const screens = useMemo(
    () =>
      SCREENS.map((name) => (
        <Screen key={name} name={name} component={SCREEN_COMPONENTS[name]} />
      )),
    [],
  )

  return (
    <Navigator initialRouteName={tabNames.camera} screenOptions={screenOptions}>
      {screens}
    </Navigator>
  )
}

export default reflect({
  view: TabsNavigatorWidget,
  bind: {
    isDark: theme.$isDark,
    safeAreaTop: safeArea.$top,
  },
})
