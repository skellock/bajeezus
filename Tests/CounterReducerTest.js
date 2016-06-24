import test from 'ava'
import reducer from '../CounterReducer'

test('increment from a fresh state', t => {
  const state = reducer(undefined, { type: 'INCREMENT' })
  t.deepEqual(state, { value: 1 })
})

test('increment from a previous state', t => {
  const state = reducer({ value: 68 }, { type: 'INCREMENT' })
  t.deepEqual(state, { value: 69 })
})

test('play nicely with other reducers', t => {
  const previousState = { value: 9000 }
  const state = reducer(previousState, { type: 'NONE' })
  t.is(state, previousState)
})
