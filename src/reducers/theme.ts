import { SET_THEME } from '../actions/setTheme';
import { ThemeAction } from '../types';

export const initialState = 'light';

export const theme = (state = initialState, action:ThemeAction) => {
	switch (action.type) {
		case SET_THEME:
			return action.payload;

		default:
			return state;
	}
};

export default theme;
