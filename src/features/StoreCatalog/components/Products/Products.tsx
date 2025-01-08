// type ProductsProps = {};

import * as React from 'react';

import { Pagination } from '@/components/app/Pagination/Pagination';
import { usePagination } from '@/hooks';

const Products = () => {
	const listOfProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const totalPages = 5;
	const pagination = usePagination(1, totalPages);
	return (
		<div className="h-full w-full bg-white-100">
			<div className="flex justify-end">
				<Pagination {...pagination} />
			</div>
			<ul className="py-20">
				{listOfProducts.map((item) => (
					<li key={item}>produto {item}</li>
				))}
			</ul>
			<div className="flex justify-end">
				<Pagination {...pagination} />
			</div>
		</div>
	);
};

export default React.memo(Products);
