import test from 'ava'
import saga, { acquireDataFromSomewhere } from '../TimeToShineSaga'
import { put, call, select } from 'redux-saga/effects'

test('the saga works', t => {
  // grab the saga (generator function) to test
  const gen = saga()

  // a sugary help to clean up our assertions below
  const step = (mockThePreviousYieldCall) => gen.next(mockThePreviousYieldCall).value

  // fake data to inject
  const mockState = { counter: { value: 1234 } }
  const currentCounterValue = mockState.counter.value
  const mockData = 'Fakey McMockerson'

  // test the 4 steps of our saga
  t.deepEqual(step(), put({ type: 'INCREMENT' }))
  t.deepEqual(step(), select())
  t.deepEqual(step(mockState), call(acquireDataFromSomewhere, currentCounterValue))
  t.deepEqual(step(mockData), put({type: 'SAVE_DATA', randomPieceOfData: mockData}))
})
