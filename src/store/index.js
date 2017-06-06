import { createStore, combineReducers, compose } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import persistState from 'redux-localstorage'

import transactions from './transactions'

const reducers = combineReducers({
  transactions,
  form: reduxFormReducer
})

const enhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  persistState()
)

const store = createStore(
  reducers,
  enhancer
)

export default store
