import {AVPlaybackStatus} from 'expo-av'
import {useCallback, useRef, useState} from 'react'

interface VideoCompletionHook {
  isVideoFinished: boolean
  handleVideoStatus: (status: AVPlaybackStatus) => void
  waitForVideoCompletion: () => Promise<void>
}

export const useVideoCompletion = (): VideoCompletionHook => {
  const [isVideoFinished, setIsVideoFinished] = useState(false)
  const videoFinishedPromiseRef = useRef<{
    resolve: () => void
    promise: Promise<void>
  } | null>(null)

  const getVideoFinishedPromise = useCallback(() => {
    if (!videoFinishedPromiseRef.current) {
      let resolvePromise: () => void
      const promise = new Promise<void>((resolve) => {
        resolvePromise = resolve
      })
      videoFinishedPromiseRef.current = {
        resolve: resolvePromise!,
        promise,
      }
    }
    return videoFinishedPromiseRef.current.promise
  }, [])

  const handleVideoStatus = useCallback((status: AVPlaybackStatus) => {
    if (status.isLoaded && status.didJustFinish) {
      setIsVideoFinished(true)
      videoFinishedPromiseRef.current?.resolve()
    }
  }, [])

  return {
    isVideoFinished,
    handleVideoStatus,
    waitForVideoCompletion: getVideoFinishedPromise,
  }
}
