import { PaginationUI } from '@/components/ui';

type PaginationProps = {
	totalPages: number;
	currentPage: number;
	goToPage: (page: number) => void;
	nextPage: () => void;
	previousPage: () => void;
};

export const Pagination = ({ totalPages, currentPage, goToPage, nextPage, previousPage }: PaginationProps) => {
	return (
		<PaginationUI.Pagination>
			<PaginationUI.PaginationContent>
				{Array.from({ length: totalPages }, (_, index) => {
					const page = index + 1;
					return (
						<PaginationUI.PaginationItem key={page}>
							<PaginationUI.PaginationButton
								isActive={currentPage === page}
								onClick={() => goToPage(page)}
							>
								{page}
							</PaginationUI.PaginationButton>
						</PaginationUI.PaginationItem>
					);
				})}

				<PaginationUI.PaginationItem className="ml-4">
					<PaginationUI.PaginationPrevious
						disabled={currentPage === 1}
						onClick={previousPage}
					/>
				</PaginationUI.PaginationItem>
				<PaginationUI.PaginationItem className="ml-2">
					<PaginationUI.PaginationNext
						disabled={currentPage === totalPages}
						onClick={nextPage}
					/>
				</PaginationUI.PaginationItem>
			</PaginationUI.PaginationContent>
		</PaginationUI.Pagination>
	);
};
