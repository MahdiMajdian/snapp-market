import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
	layout: {
		height: '100%',
		// Change this value to expand or shrink the width of the page in table and desktop
		maxWidth: '360px',
		margin: '0 auto',
	},
	header: {
		height: '65px',
		backgroundColor: '#ffffff',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	backButton: {
		background: 'none',
		cursor: 'pointer',
		borderWidth: '0',
		padding: '20px',
	},
	icons: {
		padding: '20px',
	},
});
