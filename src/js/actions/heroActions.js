import { SET_HERO_DIRECTION } from './types';

export const setHeroDirection = direction => (dispatch) => {
  dispatch({
    type: SET_HERO_DIRECTION,
    direction,
  });
};
