import CategoryTabs from '@/features/StoreCatalog/components/CategoryTabs/CategoryTabs';
import Products from '@/features/StoreCatalog/components/Products/Products';

const StoreCatalog = () => {
	return (
		<div>
			<CategoryTabs
				defaultActiveTab="allProducts"
				tabs={[
					{
						id: 'allProducts',
						label: 'Todos os produtos',
						children: <Products />,
					},
					{
						id: 'shirts',
						label: 'Camisetas',
						children: <Products />,
					},
					{
						id: 'cups',
						label: 'Canecas',
						children: <Products />,
					},
				]}
			/>
		</div>
	);
};

export default StoreCatalog;
