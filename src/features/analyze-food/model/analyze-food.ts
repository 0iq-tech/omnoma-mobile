import {createEffect, sample} from 'effector'
import {handleErrorFx} from 'shared/lib'
import {captureFoodFx} from './capture-food'
import {ImageResult} from 'expo-image-manipulator'

const analyzeFoodFx = createEffect(async (photo: ImageResult) => {
  const response = await fetch(
    'https://omnoma-shazam-v02-production-omnomashazamv02workerscript.me2120.workers.dev',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 'rn',
        userName: 'React Native',
        base64Images: [photo.base64],
      }),
    },
  )

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const result = await response.json()
  return result
})

sample({
  clock: captureFoodFx.doneData,
  target: analyzeFoodFx,
})

analyzeFoodFx.doneData.watch((s) => console.log('analyzeFoodFx', s))

sample({
  clock: analyzeFoodFx.failData,
  fn: (error) => ({error, context: {source: 'analyzeFoodFx'}}),
  target: handleErrorFx,
})
