import {createEffect, createStore, sample} from 'effector'
import {Camera, PermissionResponse} from 'expo-camera'
import {app} from 'shared/lib'

const $permission = createStore<PermissionResponse | null>(null)
const $isPermissionGranted = $permission.map((p) => p?.granted ?? false)

const checkPermissionFx = createEffect(async () => {
  const cameraPermissions = await Camera.getCameraPermissionsAsync()
  return cameraPermissions
})

// check permission on app start

sample({
  clock: app.started,
  target: checkPermissionFx,
})

// memoize permission state after check

sample({
  clock: checkPermissionFx.doneData,
  target: $permission,
})

const requestPermissionFx = createEffect(async () => {
  const response = await Camera.requestCameraPermissionsAsync()
  return response
})

// memoize permission state after request

sample({
  clock: requestPermissionFx.doneData,
  target: $permission,
})

export {
  $isPermissionGranted,
  $permission,
  checkPermissionFx,
  requestPermissionFx,
}
