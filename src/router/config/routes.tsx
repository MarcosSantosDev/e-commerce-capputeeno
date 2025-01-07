import * as React from 'react';

import { RouteObject } from 'react-router';

import { RouteErrorElement } from '@/components/app/RouteErrorElement/RouteErrorElement';
import PublicLayout from '@/Layout/PublicLayout';

import routePaths from './routePaths';

const ExamplePage1 = React.lazy(() => import('@/pages/ExamplePage1'));
const ExamplePage2 = React.lazy(() => import('@/pages/ExamplePage2'));
const ExamplePage3 = React.lazy(() => import('@/pages/ExamplePage3'));
const ExamplePage4 = React.lazy(() => import('@/pages/ExamplePage4'));

export const routes: RouteObject[] = [
	{
		errorElement: <RouteErrorElement />,
		id: 'ROOT',
		path: routePaths.PRODUCTS,
		element: <PublicLayout />,
		children: [
			{
				id: 'PRODUCTS',
				index: true,
				element: <ExamplePage1 />,
			},
			{
				id: 'PRODUCT_ID',
				path: routePaths.PRODUCT_ID,
				element: <ExamplePage2 />,
			},
			{
				id: 'CART',
				path: routePaths.CART,
				element: <ExamplePage3 />,
			},
			{
				id: 'CART_PAYMENT',
				path: routePaths.CART_PAYMENT,
				element: <ExamplePage4 />,
			},
		],
	},
];

export default routes;
