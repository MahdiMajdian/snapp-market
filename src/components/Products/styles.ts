import stylex from '@stylexjs/stylex';
import { elementSizes } from '@/variables.stylex';

export const styles = stylex.create({
	productsWrapper: {
		height: `calc(100% - ${elementSizes.categories})`,
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		overflowY: 'auto',
	},
});
