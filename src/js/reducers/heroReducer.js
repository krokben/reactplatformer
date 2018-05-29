import { SET_HERO_DIRECTION } from '../actions/types';

const initialState = {
  hero: {
    direction: '',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_HERO_DIRECTION:
      return Object.assign({}, state, {
        direction: action.direction,
      });
    default:
      return state;
  }
}
