import { SET_THEME_TYPE } from '../actions/setThemeType';
import { ThemeTypeAction } from '../types';
import { lightTheme, darkTheme, Theme } from '../styles/theme';

export const initialState:Theme = lightTheme;

export const themeReducer = (state:Theme = initialState, action:ThemeTypeAction) => {
	if (action.type === SET_THEME_TYPE) {
		switch (action.payload) {
			case 'light':
				return state = lightTheme;
			case 'dark':
				return state = darkTheme;
			default:
				return state;
		}
	} else {
		return state;
	}
};

export default themeReducer;
