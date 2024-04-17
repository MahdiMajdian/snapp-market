import { colors, elementSizes } from '@/variables.stylex';
import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
	content: {
		// This one pixel comes from the border of the navigation bar
		// if we don't compensate for it we'll have a overflow on the entire screen
		height: `calc(100% - 1px - ${elementSizes.navbar} - ${elementSizes.options})`,
	},
	layout: {
		height: '100%',
		// Change this value to expand or shrink the width of the page in table and desktop
		maxWidth: '360px',
		margin: '0 auto',
	},
	header: {
		backgroundColor: '#ffffff',
		borderBottomWidth: '1px',
		borderBottomStyle: 'solid',
		borderBottomColor: '#f8f9fb',
	},
	options: {
		display: 'flex',
		height: elementSizes.options,
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: '1px',
		borderBottomStyle: 'solid',
		borderBottomColor: '#e6e6e6',
	},
	search: {
		height: '100%',
		paddingInline: '24px',
		marginBlockStart: '-2px',
		fill: colors['text-color'],
		alignItems: 'center',
	},
	filters: {
		width: '50%',
		height: '100%',
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	filterItem: {
		fontFamily: 'IRANSansX',
		fontWeight: 500,
		fontSize: '14px',
		color: colors['text-color'],
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	navbar: {
		height: elementSizes.navbar,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	backButton: {
		padding: '20px',
	},
	icons: {
		padding: '20px',
	},
	button: {
		background: 'none',
		cursor: 'pointer',
		borderWidth: '0',
	},
});
