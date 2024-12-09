import {createEvent, createStore, sample} from 'effector'

const started = createEvent()

const $isStarted = createStore<boolean>(false)

sample({
  clock: started,
  fn: () => true,
  target: $isStarted,
})

// todo: add "module": "esnext" to tsconfig.json to uncomment this code
// const scope = fork()
// await allSettled(appStarted, {scope})

export const app = {
  $isStarted,
  started,
}
