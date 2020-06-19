import { combineReducers } from 'redux';
import themeReducer from './themeReducer';

const rootReducer = combineReducers<any>({
	theme: themeReducer,
});

export default rootReducer;
