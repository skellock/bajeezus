import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './RootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './RootSaga'

export default () => {
  // create sagaMiddleware
  const sagaMiddleware = createSagaMiddleware()

  // glue some redux store enhancers together (and by some I mean 1 for this example)
  const enhancers = compose(applyMiddleware(sagaMiddleware))

  // build the redux store from our Reducer tree and our enhancers
  const store = createStore(rootReducer, enhancers)

  // kick off the sagas
  sagaMiddleware.run(rootSaga)

  // send the store back
  return store
}
