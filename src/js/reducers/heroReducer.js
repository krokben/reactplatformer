import { MOVE_HERO } from '../actions/types';

const initialState = {
  hero: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOVE_HERO:
      return {
        ...state,
        hero: action.payload,
      };
    default:
      return state;
  }
}
