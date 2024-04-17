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
					<div {...stylex.props(styles.icons)}></div>
					<div>
						<ExpressLogo />
					</div>
					<button
						{...stylex.props(styles.button, styles.backButton)}
						onClick={handleBack}>
						<Back />
					</button>
				</nav>
				<div {...stylex.props(styles.options)}>
					<div {...stylex.props(styles.filters)}>
						<div
							{...stylex.props(styles.filterItem)}
							role='button'
							onClick={handleFilter}>
							فیلتر &nbsp;
							<Setting width={16} height={16} fill={colors['text-color']} />
						</div>
						<div
							{...stylex.props(styles.filterItem)}
							role='button'
							onClick={handleSort}>
							مرتب سازی
							<Sort width={16} height={16} fill={colors['text-color']} />
						</div>
					</div>

					<button
						{...stylex.props(styles.button, styles.search)}
						onClick={handleSearch}>
						<Search />
					</button>
				</div>
			</header>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
