import {createEvent} from 'effector'

const appStarted = createEvent()

// todo: add "module": "esnext" to tsconfig.json to uncomment this code

// const scope = fork()

// await allSettled(appStarted, {scope})

export {appStarted}
