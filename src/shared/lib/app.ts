import {createEvent} from 'effector'

const started = createEvent()

// todo: add "module": "esnext" to tsconfig.json to uncomment this code
// const scope = fork()
// await allSettled(appStarted, {scope})

export const app = {
  started,
}
