import { SET_THEME_TYPE } from '../actions/setThemeType';
import { ThemeTypeAction } from '../types';

export const initialState = 'light';

export const themeType = (state = initialState, action:ThemeTypeAction) => {
	switch (action.type) {
		case SET_THEME_TYPE:
			return action.payload;

		default:
			return state;
	}
};

export default themeType;
