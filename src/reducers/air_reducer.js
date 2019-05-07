import { FETCH_AIR } from '../actions';

export default function(state = {
  loading: false, error: '', data: []
}, action) {
  console.log(action);
  switch (action.type) {
  case `${FETCH_AIR}_PENDING`:
    return {
      loading: true,
      error: '',
      data: [...state.data]
    };
  case `${FETCH_AIR}_FULFILLED`:
    return {
      loading: false,
      error: '',
      data: [action.payload.data, ...state.data]
    };
  case `${FETCH_AIR}_REJECTED`:
    return {
      loading: false,
      error: action.payload,
      data: [...state.data]
    };
  default:
    return state;
  }
}

