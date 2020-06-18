import { AnyAction } from 'redux';
import { ThunkDispatch} from 'redux-thunk';

export interface Action<T> {
	type: string;
	payload?: T;
}

export type IsLoadingAction = Action<IsLoading>;
export type IsErrorAction = Action<IsError>;
export type ThemeAction = Action<Theme>;

export type IsLoading = boolean;
export type IsError = boolean;
export type ThemeType = 'light' | 'dark';



export interface AppState {
    isLoading: IsLoading;
    isError: IsError;
    theme: Theme;
}

export type MyDispatch = ThunkDispatch<AppState, void, AnyAction>;
