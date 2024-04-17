import { Category } from '@components';

export type Image = {
	main: string;
	position: number;
	thumb: string;
	type: string;
};

export type Badge = {
	active: boolean;
	description: string;
	icon: string;
	id: number;
	name: string;
	priority: number;
	type: string;
};

export type Item = {
	id: number;
	data: {
		badges: Badge[];
		brand: string;
		brand_id: number;
		capacity: number;
		comment_count: number;
		description: string;
		discount: number;
		discountRatio: number | null;
		discount_ratio: number | null;
		featured: string;
		highlight: string;
		id: number;
		images: Image[];
		isSubsIdy: boolean;
		is_ecommerce: boolean;
		is_market_party: boolean;
		menu_category_id: number;
		menu_category_title: string;
		no_stock: boolean;
		popularity_badge_Url: string;
		popularity_badge_url: string;
		price: number;
		rating: number;
		root_category_id: number;
		root_category_title: string;
		score: number;
		stock: number;
		title: string;
		type: string;
	};
};

export type ProductListVendor = {
	data: {
		extra_sections: { categories: Category[] };
		finalResult: Item[];
	};
};
