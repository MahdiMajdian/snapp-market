import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Categories, Products } from '@components';
import { getProductListVendor } from '@services/product-list/api';

function useVendor() {
	const { data, fetchNextPage } = useInfiniteQuery({
		queryKey: ['vendor'],
		queryFn: ({ pageParam }) => getProductListVendor({ page: pageParam }),
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage?.data?.finalResult.length > 0
				? allPages.length
				: undefined;
		},
	});

	return { data, fetchNextPage };
}

function ProductList() {
	const { data, fetchNextPage } = useVendor();

	const categories = data?.pages[0].data.extra_sections.categories;
	const productPages = data?.pages;

	const categoriesContent = useMemo(() => {
		if (categories) {
			return <Categories items={categories} />;
		}
		return null;
	}, [categories]);

	const productsContent = useMemo(() => {
		if (productPages) {
			return (
				<Products productPages={productPages} fetchNextPage={fetchNextPage} />
			);
		}
		return null;
	}, [fetchNextPage, productPages]);

	return (
		<>
			{categoriesContent}
			{productsContent}
		</>
	);
}

export default ProductList;
