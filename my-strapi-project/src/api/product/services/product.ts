/**
 * product service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::product.product', ({ strapi }) => ({
	async getExpensiveProducts({ page = 1, pageSize = 10 }) {
		page = Number(page);
		pageSize = Number(pageSize);
		const [products, total] = await Promise.all([
			strapi.entityService.findMany('api::product.product', {
				filters: { price: { $gte: 6000 } },
				pagination: { page, pageSize },
				populate: '*', // Optional: Include related data
			}),
			strapi.db.query('api::product.product').count({
				where: { price: { $gte: 6000 } },
			}),
		]);
		// Construct metadata
		const meta = {
			pagination: {
				page,
				pageSize,
				pageCount: Math.ceil(total / pageSize),
				total,
			},
		};
		return { products, meta };
	},
}));
