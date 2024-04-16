import stylex from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';
import { styles } from './styles';
import { Back, ExpressLogo } from '@icons';

function Layout({ children }: PropsWithChildren) {
	const handleClick = () => {
		return;
	};
	return (
		<div {...stylex.props(styles.layout)}>
			<div {...stylex.props(styles.header)}>
				<div {...stylex.props(styles.icons)}></div>
				<div>
					<ExpressLogo />
				</div>
				<button {...stylex.props(styles.backButton)} onClick={handleClick}>
					<Back />
				</button>
			</div>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
