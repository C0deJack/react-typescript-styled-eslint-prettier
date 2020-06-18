import { ThemeType, ThemeTypeAction } from '../types';

export const SET_THEME_TYPE = 'SET_THEME_TYPE';

export const setThemeType = (payload:ThemeType):ThemeTypeAction => ({
	type: SET_THEME_TYPE,
	payload,
});
