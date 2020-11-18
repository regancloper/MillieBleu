const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	// Query for all products and blog posts in Shopify
	const result = await graphql(`
		query {
			allShopifyProduct(sort: { fields: title }) {
				nodes {
					id
					handle
				}
			}
		}
	`);

	// Iterate over all products and create a new page using a template
	// The product "handle" is generated automatically by Shopify
	result.data.allShopifyProduct.nodes.forEach(node => {
		createPage({
			path: `/product/${node.handle}`,
			component: path.resolve(`./src/templates/product.tsx`),
			context: {
				productId: node.id,
			},
		});
	});

	// Iterate over all blog posts and create a new page using a template
	// The blog post "handle" is generated automatically by Shopify
	// result.data.allShopifyArticle.nodes.forEach(node => {
	// 	createPage({
	// 		path: `/blog/${node.handle}`,
	// 		component: path.resolve(`./src/templates/blogPost.tsx`),
	// 		context: {
	// 			articleId: node.id,
	// 		},
	// 	});
	// });
};
