import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Categories } from '@components';
import { getProductListVendor } from '@services/product-list/api';

function useVendor() {
	const { data } = useQuery({
		queryKey: ['categories'],
		queryFn: getProductListVendor,
	});

	return data;
}

function ProductList() {
	const data = useVendor();

	const categories = data?.data.extra_sections.categories;

	const categoriesContent = useMemo(() => {
		if (categories) {
			return <Categories items={categories} />;
		}
		return null;
	}, [categories]);

	return <div>{categoriesContent}</div>;
}

export default ProductList;
