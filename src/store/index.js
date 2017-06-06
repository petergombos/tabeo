import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import transactions from './transactions'

const reducers = combineReducers({
  transactions,
  form: reduxFormReducer
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
