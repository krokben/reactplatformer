import { MOVE_HERO } from './types';

export const moveHero = () => (dispatch) => {
  dispatch({
    type: MOVE_HERO,
  });
};
