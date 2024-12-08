import {sample} from 'effector'
import {app} from 'shared/lib'
import {storage} from 'shared/storage'

sample({
  clock: app.started,
  target: storage.checkStorageReadyFx,
})
