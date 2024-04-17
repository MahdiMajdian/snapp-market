import { colors } from '@/index.stylex';
import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
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
		height: '64px',
		justifyContent: 'space-between',
		alignItems: 'center',
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
		height: '65px',
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
