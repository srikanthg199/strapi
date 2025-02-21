export default {
	routes: [
		{
			method: 'GET',
			path: '/products/expensive',
			handler: 'product.customAction',
			// config: {
			// 	auth: {
			// 		scope: ['authenticated'],
			// 	},
			// 	policies: [],
			// },
		},
	],
};
