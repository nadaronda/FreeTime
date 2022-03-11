import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const initState = {
  objetivo: [{
    _id: 0,
    objetivo: '',
    descripcion: '',
    limitTime: ''
  }]
}

function routReducer (state = initState, action) {
  switch (action.type) {
    case 'ADDITEM':
      return {
        ...state,
        ObjetivoGeneral: [...state.ObjetivoGeneral, action.objetivo]
      }
    case 'DELETEALL':
      return {
        ...state,
        ObjetivoGeneral: []
      }
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = createStore(
  routReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
