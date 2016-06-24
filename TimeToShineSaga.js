import { put, call, select } from 'redux-saga/effects'

// Redux-Saga supports promises too.  Useful for `fetch` or other async things.
export function acquireDataFromSomewhere (numberOfThings) {
  return new Promise((resolve, reject) => {
    resolve(`here are ${numberOfThings} things`)
  })
}

// Fires when we see TIME_TO_SHINE come through.
// Its pretty random what we do here, the point is to really show how tests work.
export default function * (action) {
  yield put({type: 'INCREMENT'}) // step 1
  const state = yield select() // step 2
  const currentCounterValue = state.counter.value
  const data = yield call(acquireDataFromSomewhere, currentCounterValue) // step 3
  yield put({type: 'SAVE_DATA', randomPieceOfData: data}) // step 4
}
