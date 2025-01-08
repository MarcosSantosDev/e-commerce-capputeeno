import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { vi } from 'vitest';

import { Pagination } from './Pagination';

describe('Pagination Component', () => {
	it('renders the correct number of page buttons', () => {
		render(
			<Pagination
				totalPages={5}
				currentPage={1}
				goToPage={() => {}}
				nextPage={() => {}}
				previousPage={() => {}}
			/>
		);

		const pageButtons = screen.getAllByRole('button', { name: /\d+/ });
		expect(pageButtons).toHaveLength(5);
	});

	it('highlights the active page button', () => {
		render(
			<Pagination
				totalPages={5}
				currentPage={3}
				goToPage={() => {}}
				nextPage={() => {}}
				previousPage={() => {}}
			/>
		);

		const activeButton = screen.getByRole('button', { name: '3' });
		expect(activeButton).toHaveAttribute('aria-current', 'page');
	});

	it('calls goToPage when a page button is clicked', async () => {
		const goToPageMock = vi.fn();
		render(
			<Pagination
				totalPages={5}
				currentPage={1}
				goToPage={goToPageMock}
				nextPage={() => {}}
				previousPage={() => {}}
			/>
		);

		const pageButton = screen.getByRole('button', { name: '3' });
		await userEvent.click(pageButton);

		expect(goToPageMock).toHaveBeenCalledWith(3);
	});

	it('calls nextPage when the next button is clicked', async () => {
		const nextPageMock = vi.fn();
		render(
			<Pagination
				totalPages={5}
				currentPage={1}
				goToPage={() => {}}
				nextPage={nextPageMock}
				previousPage={() => {}}
			/>
		);

		const nextButton = screen.getByRole('button', { name: /next/i });
		await userEvent.click(nextButton);

		expect(nextPageMock).toHaveBeenCalled();
	});

	it('calls previousPage when the previous button is clicked', async () => {
		const previousPageMock = vi.fn();
		render(
			<Pagination
				totalPages={5}
				currentPage={2}
				goToPage={() => {}}
				nextPage={() => {}}
				previousPage={previousPageMock}
			/>
		);

		const previousButton = screen.getByRole('button', { name: /previous/i });
		await userEvent.click(previousButton);

		expect(previousPageMock).toHaveBeenCalled();
	});

	it('disables previous button on the first page', () => {
		render(
			<Pagination
				totalPages={5}
				currentPage={1}
				goToPage={() => {}}
				nextPage={() => {}}
				previousPage={() => {}}
			/>
		);

		const previousButton = screen.getByRole('button', { name: /previous/i });
		expect(previousButton).toBeDisabled();
	});

	it('disables next button on the last page', () => {
		render(
			<Pagination
				totalPages={5}
				currentPage={5}
				goToPage={() => {}}
				nextPage={() => {}}
				previousPage={() => {}}
			/>
		);

		const nextButton = screen.getByRole('button', { name: /next/i });
		expect(nextButton).toBeDisabled();
	});
});
