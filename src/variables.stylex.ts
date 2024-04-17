import stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
	'text-color': '#424242',
	'dark-gray': '#212121',
	'bg-main': '#ffffff',
});

export const sizes = stylex.defineVars({
	'text-regular': '16px',
	'text-medium': '14px',
	'text-x-small': '10px',
	'line-height-md': '20px',
	'line-height-xs': '16px',
});

export const elementSizes = stylex.defineVars({
	navbar: '65px',
	options: '64px',
	categories: '68px',
});
