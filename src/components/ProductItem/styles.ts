import { colors, sizes } from '@/variables.stylex';
import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
	wrapper: {
		height: '280px',
		borderInlineStartWidth: '1px',
		borderInlineStartStyle: 'solid',
		borderInlineStartColor: '#f5f5f5',
		borderBlockStartWidth: '1px',
		borderBlockStartStyle: 'solid',
		borderBlockStartColor: '#f5f5f5',
		backgroundColor: '#ffffff',
		display: 'flex',
		justifyContent: 'center',
	},
	item: {
		display: 'flex',
		flexDirection: 'column',
		gap: '8px',
		width: '128px',
	},
	thumbnail: {
		position: 'relative',
	},
	image: {
		margin: '4px',
		width: '120px',
		height: '120px',
	},
	addButton: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '32px',
		width: '32px',
		position: 'absolute',
		bottom: '0',
		right: '0',
		background: colors['bg-main'],
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#ff661f',
		borderRadius: '6px',
		color: '#ff661f',
	},
	details: {
		flexGrow: '1',
	},
	topSection: {
		display: 'flex',
		flexDirection: 'column',
		gap: '8px',
	},
	title: {
		display: '-webkit-box',
		color: colors['text-color'],
		fontSize: sizes['text-medium'],
		fontWeight: 500,
		height: `calc(${sizes['line-height-md']} * 2)`,
		lineHeight: sizes['line-height-md'],
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		WebkitLineClamp: '2',
		WebkitBoxOrient: 'vertical',
	},
	badgeContainer: {
		minHeight: '24px',
		display: 'flex',
	},
	bottomSection: {
		height: '44px',
	},
	priceContainer: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		gap: '4px',
	},
	price: {
		color: colors['dark-gray'],
		fontSize: sizes['text-regular'],
		fontWeight: 700,
		lineHeight: sizes['line-height-md'],
	},
	unit: {
		color: colors['text-color'],
		fontSize: sizes['text-x-small'],
		fontWeight: 500,
		lineHeight: sizes['line-height-xs'],
	},
});
