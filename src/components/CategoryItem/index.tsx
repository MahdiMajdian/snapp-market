import stylex from '@stylexjs/stylex';
import { styles } from './styles';

type Props = {
	title: string;
	imageUrl: string;
	alt?: string;
};

function CategoryItem({ alt, imageUrl, title }: Props) {
	return (
		<div {...stylex.props(styles.item)}>
			<span {...stylex.props(styles.title)}>{title}</span>
			<img {...stylex.props(styles.image)} src={imageUrl} alt={alt} />
		</div>
	);
}

export default CategoryItem;
