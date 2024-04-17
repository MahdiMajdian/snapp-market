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
			<img {...stylex.props(styles.image)} src={imageUrl} alt={alt} />
			<span {...stylex.props(styles.title)}>{title}</span>
		</div>
	);
}

export default CategoryItem;
