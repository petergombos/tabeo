import { createStore, combineReducers } from 'redux'
import transactions from './transactions'

const reducers = combineReducers({
  transactions
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
