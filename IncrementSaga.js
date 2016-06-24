import { call } from 'redux-saga/effects'

// do nothing... or do we?
function * forwardRequestToNsa () {
  console.log('hey')
}

// fires when we see INCREMENT come through
export default function * (action) {
  yield call(forwardRequestToNsa)
}
