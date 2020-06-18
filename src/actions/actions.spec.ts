import { IsError, IsLoading } from '../types';
import { SET_IS_ERROR, setIsError } from './setIsError';
import { SET_IS_LOADING, setIsLoading } from './setIsLoading';

describe('actions', () => {

	describe('setIsLoading', () => {
		it('returns it\'s given type and payload', () => {
			const payload = true;
			const result = setIsLoading(payload as IsLoading);
			expect(result.payload).toEqual(payload);
			expect(result.type).toEqual(SET_IS_LOADING);
		});
	});

	describe('setIsError', () => {
		it('returns it\'s given type and payload', () => {
			const payload = true;
			const result = setIsError(payload as IsError);
			expect(result.payload).toEqual(payload);
			expect(result.type).toEqual(SET_IS_ERROR);
		});
	});
});
