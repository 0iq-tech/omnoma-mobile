import {createEvent, createStore} from 'effector'
import {ref} from './ref'

const onReady = createEvent()

const $ready = createStore(ref.isReady()).on(onReady, () => true)

export {$ready, onReady}
