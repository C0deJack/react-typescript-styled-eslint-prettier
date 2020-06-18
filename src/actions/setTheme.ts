import { ThemeType, ThemeAction } from '../types';

export const SET_THEME = 'SET_THEME';

export const setTheme = (payload:ThemeType):ThemeAction => ({
	type: SET_THEME,
	payload,
});
