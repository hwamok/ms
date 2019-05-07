import { combineReducers } from 'redux';
import AirReducer from './air_reducer';
import selected from './selected_reducer';

const rootReducer = combineReducers({
  selected,
  air: AirReducer
});

export default rootReducer;