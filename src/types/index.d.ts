import { AnyAction } from 'redux';
import { ThunkDispatch} from 'redux-thunk';

export interface Action<T> {
	type: string;
	payload?: T;
}

export type IsLoadingAction = Action<IsLoading>;
export type IsErrorAction = Action<IsError>;

export type IsLoading = boolean;
export type IsError = boolean;


export interface AppState {
    isLoading: IsLoading;
    isError: IsError;
}

export type MyDispatch = ThunkDispatch<AppState, void, AnyAction>;
