import { takeLatest, takeEvery } from 'redux-saga'
import timeToShineSaga from './TimeToShineSaga'
import incrementSaga from './IncrementSaga'

// our root saga
export default function * () {
  yield [
    takeLatest('TIME_TO_SHINE', timeToShineSaga),
    takeEvery('INCREMENT', incrementSaga)
  ]
}
