import { combineReducers } from 'redux';
import isError from './isError';
import isLoading from './isLoading';

const rootReducer = combineReducers<any>({
	isLoading,
	isError,
});

export default rootReducer;
