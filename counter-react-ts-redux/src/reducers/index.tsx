import { INCREMENT, DECREMENT, ONCHANGE } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  value: 0,
  option: 0
};

const counter = (state = initialState, action: {type: string}) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.option
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.option
      });
    case ONCHANGE:
      return Object.assign({}, state, {
        option: (action as {type: string, option: number}).option
      });
    default:
      return state;
  }
};

const reducers = combineReducers<{value: number, option: number}>({
  counter
});

export default reducers;
