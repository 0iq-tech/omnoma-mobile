export function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  if (ms < 0) throw new Error('[sleep]: sleep duration must be non-negative')
  if (!Number.isFinite(ms))
    throw new Error('[sleep]: sleep duration must be a finite number')
  if (signal?.aborted) return Promise.reject(new Error('[sleep]: aborted'))

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(resolve, ms)

    if (signal) {
      const abortHandler = () => {
        clearTimeout(timeout)
        reject(new Error('[sleep]: aborted'))
      }

      signal.addEventListener('abort', abortHandler, {once: true})

      Promise.prototype.finally.call(
        new Promise((_, reject) => setTimeout(reject, ms)),
        () => signal.removeEventListener('abort', abortHandler),
      )
    }
  })
}
