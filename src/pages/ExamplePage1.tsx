import { Pagination } from '@/components/app/Pagination/Pagination';
import { usePagination } from '@/hooks';

const ExamplePage = () => {
	const totalPages = 10;
	const pagination = usePagination(1, totalPages);

	return (
		<div className="h-full w-full">
			<p className="text-lg-">ExamplePage 01</p>

			<Pagination {...pagination} />
		</div>
	);
};

export default ExamplePage;
