import {createEvent, createStore} from 'effector'
import {ref} from './ref'

const onReady = createEvent()

const $isReady = createStore(ref.isReady()).on(onReady, () => true)

export {$isReady, onReady}
