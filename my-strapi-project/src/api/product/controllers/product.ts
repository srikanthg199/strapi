/**
 * product controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
	async customAction(ctx) {
		try {
			const { page, pageSize } = ctx.query;
			// Call the service method
			const { products, meta } = await strapi.service('api::product.product').getExpensiveProducts({ page, pageSize });

			return ctx.send({ data: products, meta });
		} catch (error) {
			ctx.throw(500, 'Internal Server Error', { error });
		}
	},
}));
