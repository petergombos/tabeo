import { createStore, combineReducers, compose } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import persistState from 'redux-localstorage'

import transactions from './transactions'

const reducers = combineReducers({
  transactions,
  form: reduxFormReducer
})

const getComposeEnhancers = () => {
  if (window.navigator.userAgent.includes('Chrome')) {
    return compose(
      persistState()
      , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }
  return compose(persistState())
}

const store = createStore(
  reducers,
  getComposeEnhancers()
)

export default store
