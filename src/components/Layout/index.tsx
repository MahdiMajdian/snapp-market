import stylex from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';
import { styles } from './styles';
import { Back, ExpressLogo, Search, Setting, Sort } from '@icons';
import { colors } from '@/index.stylex';

function Layout({ children }: PropsWithChildren) {
	const handleBack = () => {
		return;
	};
	const handleFilter = () => {
		return;
	};
	const handleSort = () => {
		return;
	};
	const handleSearch = () => {
		return;
	};
	return (
		<div {...stylex.props(styles.layout)}>
			<header {...stylex.props(styles.header)}>
				<nav {...stylex.props(styles.navbar)}>
					<button
						{...stylex.props(styles.button, styles.backButton)}
						onClick={handleBack}>
						<Back />
					</button>
					<div>
						<ExpressLogo />
					</div>
					<div {...stylex.props(styles.icons)}></div>
				</nav>
				<div {...stylex.props(styles.options)}>
					<button
						{...stylex.props(styles.button, styles.search)}
						onClick={handleSearch}>
						<Search />
					</button>
					<div {...stylex.props(styles.filters)}>
						<div
							{...stylex.props(styles.filterItem)}
							role='button'
							onClick={handleSort}>
							<Sort width={16} height={16} fill={colors['text-color']} />
							مرتب سازی
						</div>
						<div
							{...stylex.props(styles.filterItem)}
							role='button'
							onClick={handleFilter}>
							<Setting width={16} height={16} fill={colors['text-color']} />
							&nbsp; فیلتر
						</div>
					</div>
				</div>
			</header>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
