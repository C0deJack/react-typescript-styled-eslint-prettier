import { combineReducers } from 'redux';
import themeType from './themeType';

const rootReducer = combineReducers<any>({
	themeType,
});

export default rootReducer;
