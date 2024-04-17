import { colors } from '@/index.stylex';
import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
	item: {
		'::-webkit-scrollbar': {
			display: 'none',
		},
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexShrink: 0,
		backgroundColor: '#ffffff',
		borderRadius: '6px',
		boxShadow: '0 2px 12px 0 rgba(0,0,0,.1)',
		color: colors['text-color'],
		whiteSpace: 'nowrap',
		paddingInlineEnd: '2px',
		paddingInlineStart: '10px',
		marginInlineEnd: '8px',
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: '#ffffff',
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
