import { urls } from '@services/product-list/urls';
import { get } from '@services/axios';

import { CATEGORY_ID, VENDOR_CODE } from '@constants';
import { ProductListVendor } from '@types';

export const getProductListVendor = async (): Promise<ProductListVendor> => {
	const { data } = await get(urls.productList, {
		vendor_code: VENDOR_CODE,
		category_id: CATEGORY_ID,
		page: '0',
		page_size: '12',
		size: '12',
	});

	return data;
};
