import { createStore, combineReducers, compose } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import persistState from 'redux-localstorage'

import transactions from './transactions'

// Reducer Definitions
const reducers = combineReducers({
  transactions,
  form: reduxFormReducer
})

const persistStateMiddleware = persistState('transactions', {
  key: 'tabeo'
})

// Add Redux Devtools and Localstorage Support
const getComposeEnhancers = () => {
  if (window.navigator.userAgent.includes('Chrome')) {
    return compose(
      persistStateMiddleware
      , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }
  return compose(persistStateMiddleware)
}

// Creating the store
const store = createStore(
  reducers,
  getComposeEnhancers()
)

export default store
