import {createEffect} from 'effector'
import {Alert, Platform} from 'react-native'

/** Available error logging levels */
const LEVELS = {
  /** For information messages that don't indicate any issues */
  INFO: 'INFO',
  /** For potential issues that don't affect core functionality */
  WARN: 'WARN',
  /** For errors that affect functionality but don't crash the app */
  ERROR: 'ERROR',
  /** For critical errors that require immediate attention */
  FATAL: 'FATAL',
} as const

/** Error logging level type */
type ErrorLevel = keyof typeof LEVELS

/**
 * Context information for the error
 * @property {string} [source] - Where the error originated (e.g., effect name, feature name)
 * @property {Record<string, unknown>} [details] - Additional contextual information
 */
type ErrorContext = {
  source?: string
  details?: Record<string, unknown>
}

/**
 * Parameters for the error handling effect
 * @property {Error} error - The error object to be processed
 * @property {ErrorLevel} [level] - Severity level of the error
 * @property {ErrorContext} [context] - Additional context about the error
 */
type ErrorParams = {
  error: Error
  level?: ErrorLevel
  context?: ErrorContext
}

/**
 * Displays a fatal error alert to the user
 */
const handleFatalError = () => {
  Alert.alert(
    'Critical Error',
    'An unexpected error occurred. Please restart the app.',
    [{text: 'OK'}],
  )
}

/**
 * Effect for handling and logging errors in the application
 *
 * @example
 * ```typescript
 * sample({
 *   clock: someEffect.failData,
 *   fn: (error) => ({
 *     error,
 *     level: LEVELS.ERROR,
 *     context: {
 *       source: 'someEffect',
 *       details: { additional error context }
 *     }
 *   }),
 *   target: handleErrorFx,
 * })
 * ```
 */
const handleErrorFx = createEffect(
  async ({error, level = LEVELS.ERROR, context = {}}: ErrorParams) => {
    const errorObject = {
      timestamp: new Date().toISOString(),
      level,
      message: error.message || 'Unknown error',
      metadata: {
        source: context.source || 'unknown',
        platform: Platform.OS,
        version: Platform.Version,
        details: context.details || {},
      },
    }

    // Log with different colors based on level
    switch (level) {
      case LEVELS.INFO:
        console.log('\x1b[34m', 'INFO:', errorObject)
        break
      case LEVELS.WARN:
        console.warn('\x1b[33m', 'WARNING:', errorObject)
        break
      case LEVELS.ERROR:
        console.error('\x1b[31m', 'ERROR:', errorObject)
        break
      case LEVELS.FATAL:
        console.error('\x1b[41m', 'FATAL:', errorObject)
        handleFatalError()
        break
    }

    return errorObject
  },
)

export {handleErrorFx, LEVELS}
export type {ErrorLevel, ErrorContext, ErrorParams}
