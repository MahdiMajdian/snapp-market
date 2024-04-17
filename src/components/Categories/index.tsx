import stylex from '@stylexjs/stylex';
import { CategoryItem } from '@/components';
import { styles } from './styles';
import { Props } from './types';

function Categories({ items }: Props) {
	return (
		<div
			{...stylex.props(
				styles.categories,
				styles.hiddenScrollbar,
				styles.shadow
			)}>
			{items.map((item) => (
				<CategoryItem key={item.id} title={item.title} imageUrl={item.image} />
			))}
		</div>
	);
}

export default Categories;
