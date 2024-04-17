import stylex from '@stylexjs/stylex';

export const styles = stylex.create({
	categories: {
		height: '68px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: '#f8f9fb',
		padding: '8px',
		overflowX: 'auto',
	},
	hiddenScrollbar: {
		'::-webkit-scrollbar': {
			display: 'none',
		},
	},
	shadow: {
		boxShadow: '0 1px 2px 0 hsla(0,0%,49%,.5)',
		transform: 'translateY(-1px)',
	},
});
