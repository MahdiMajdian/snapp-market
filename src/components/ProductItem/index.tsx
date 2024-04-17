import stylex from '@stylexjs/stylex';
import { Item } from '@types';
import { styles } from './styles';
import { Plus } from '@/assets/icons';
import ImagePlaceholder from '@assets/images/image-placeholder.webp';

type Props = {
	product: Item;
};

function ProductItem({ product }: Props) {
	const { price, title } = product.data;

	return (
		<div {...stylex.props(styles.wrapper)}>
			<div {...stylex.props(styles.item)}>
				<div {...stylex.props(styles.thumbnail)}>
					<img
						{...stylex.props(styles.image)}
						src={
							product.data.images
								? product.data.images[0].thumb
								: ImagePlaceholder
						}
						alt='product thumbnail'
						loading='lazy'
					/>
					<div {...stylex.props(styles.addButton)}>
						<Plus />
					</div>
				</div>
				<div {...stylex.props(styles.details)}>
					<div {...stylex.props(styles.topSection)}>
						<p {...stylex.props(styles.title)}>{title}</p>
						<div {...stylex.props(styles.badgeContainer)}></div>
					</div>
					<div {...stylex.props(styles.bottomSection)}>
						<div {...stylex.props(styles.priceContainer)}>
							<span {...stylex.props(styles.price)}>
								{price.toLocaleString('fa-IR')}
							</span>
							<span {...stylex.props(styles.unit)}>تومان</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;
