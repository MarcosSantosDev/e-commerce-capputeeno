import { renderHook, act } from '@testing-library/react';

import { usePagination } from './usePagination';

describe('usePagination', () => {
	it('should initialize with the correct initial page', () => {
		const { result } = renderHook(() => usePagination(1, 5));

		expect(result.current.currentPage).toBe(1);
		expect(result.current.totalPages).toBe(5);
	});

	it('should go to a specific page within range', () => {
		const { result } = renderHook(() => usePagination(1, 5));

		act(() => {
			result.current.goToPage(3);
		});

		expect(result.current.currentPage).toBe(3);
	});

	it('should not go to a page out of range', () => {
		const { result } = renderHook(() => usePagination(1, 5));

		act(() => {
			result.current.goToPage(0);
		});

		expect(result.current.currentPage).toBe(1);

		act(() => {
			result.current.goToPage(6);
		});

		expect(result.current.currentPage).toBe(1);
	});

	it('should go to the next page', () => {
		const { result } = renderHook(() => usePagination(1, 5));

		act(() => {
			result.current.nextPage();
		});

		expect(result.current.currentPage).toBe(2);

		act(() => {
			result.current.nextPage();
		});

		expect(result.current.currentPage).toBe(3);
	});

	it('should not go beyond the last page', () => {
		const { result } = renderHook(() => usePagination(5, 5));

		act(() => {
			result.current.nextPage();
		});

		expect(result.current.currentPage).toBe(5);
	});

	it('should go to the previous page', () => {
		const { result } = renderHook(() => usePagination(3, 5));

		act(() => {
			result.current.previousPage();
		});

		expect(result.current.currentPage).toBe(2);

		act(() => {
			result.current.previousPage();
		});

		expect(result.current.currentPage).toBe(1);
	});

	it('should not go below the first page', () => {
		const { result } = renderHook(() => usePagination(1, 5));

		act(() => {
			result.current.previousPage();
		});

		expect(result.current.currentPage).toBe(1);
	});
});
