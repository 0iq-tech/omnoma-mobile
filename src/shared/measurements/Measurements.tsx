import {useDimensions} from './dimensions'
import {useSafeAreaMeasurement} from './safe-area'

export default function Measurements() {
  useDimensions()
  useSafeAreaMeasurement()

  return null
}
