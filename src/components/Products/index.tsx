import { useInView } from 'react-intersection-observer';
import stylex from '@stylexjs/stylex';
import { ProductListVendor } from '@types';

import { styles } from './styles';
import ProductItem from '../ProductItem';
import { useEffect } from 'react';

type Props = {
	productPages: ProductListVendor[];
	fetchNextPage: () => void;
};

function Products({ productPages, fetchNextPage }: Props) {
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [fetchNextPage, inView]);

	return (
		<div {...stylex.props(styles.productsWrapper)}>
			{productPages.map((page) =>
				page?.data?.finalResult.map((product) => (
					<ProductItem key={product.id} product={product} />
				))
			)}
			<div ref={ref}></div>
		</div>
	);
}

export default Products;
