import { combineReducers } from 'redux'
import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING,
  UPDATE_MUSEUM_FILTER
} from './actions/types'

// state = {
//   paintings: [],
//   activePaintingId: null,
//   museumFilter: ''
// }

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload]
    case DELETE_PAINTING:
      return state.filter(painting => painting.id !== action.payload)
    default:
      return state
  }
}

const activePaintingIdReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id
    case FETCH_PAINTINGS:
      return Array.isArray(action.payload) && action.payload[0]
        ? action.payload[0].id
        : null
    default:
      return state
  }
}

const museumFilterReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_MUSEUM_FILTER:
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer,
  museumFilter: museumFilterReducer
})

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer
