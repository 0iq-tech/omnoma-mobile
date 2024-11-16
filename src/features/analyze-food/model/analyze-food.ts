import {createEffect, createStore, sample} from 'effector'
import {ImageResult} from 'expo-image-manipulator'
import {condition} from 'patronum'
import {handleErrorFx} from 'shared/lib'
import {captureFoodFx} from './capture-food'

const analyzeFoodFx = createEffect(async (photo: ImageResult) => {
  if (!photo.base64) {
    throw new Error('No base64 image')
  }

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

// analyze food after capturing it, but only if the photo has base64

condition({
  source: captureFoodFx.doneData,
  if: (photo) => Boolean(photo.base64),
  then: analyzeFoodFx,
  else: handleErrorFx.prepend(() => ({
    error: new Error('No base64 image'),
    context: {source: 'analyzeFoodFx'},
  })),
})

const $foodAnalysis = createStore<any | null>(null)

// store the result of the analysis

sample({
  clock: analyzeFoodFx.doneData,
  filter: Boolean,
  target: $foodAnalysis,
})

$foodAnalysis.watch((s) => console.log('$foodAnalysis', s))

// handle errors

sample({
  clock: analyzeFoodFx.failData,
  fn: (error) => ({error, context: {source: 'analyzeFoodFx'}}),
  target: handleErrorFx,
})

export {$foodAnalysis}
