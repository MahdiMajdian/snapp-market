import stylex from '@stylexjs/stylex';
import { CategoryItem } from '@/components';
import { styles } from './styles';

function Categories() {
	return (
		<div {...stylex.props(styles.categories)}>
			<CategoryItem title='مواد غذایی' imageUrl={'img'} />
		</div>
	);
}

export default Categories;
