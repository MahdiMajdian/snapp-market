import { colors } from '@/index.stylex';
import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
	item: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderRadius: '6px',
		boxShadow: '0 2px 12px 0 rgba(0,0,0,.1)',
		color: colors['text-color'],
		whiteSpace: 'nowrap',
		paddingInlineStart: '2px',
		paddingInlineEnd: '10px',
		marginInlineStart: '8px',
	},
	image: {
		height: '48px',
		width: '48px',
		backgroundPosition: '50%',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	title: {
		fontSize: '12px',
	},
});
