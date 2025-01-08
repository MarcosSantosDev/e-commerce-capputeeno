import { useState } from 'react';

export const usePagination = (initialPage = 1, totalPages = 1) => {
	const [currentPage, setCurrentPage] = useState(initialPage);

	const goToPage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const previousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return { currentPage, goToPage, nextPage, previousPage, totalPages };
};
