import uuidV4 from 'uuid/v4'

// ACTION TYPES
const ADD = 'transaction/add'

// ACTIONS
export const addTransaction = (payload) => ({
  type: ADD,
  payload: {
    ...payload,
    createdAt: new Date().getTime(),
    status: Math.random() > 0.5 ? 'pending' : 'processed',
    id: uuidV4()
  }
})

// INITIAL STATE
const initialState = []

// REDUCER
const transactions = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default transactions
