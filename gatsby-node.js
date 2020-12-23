const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	// Query for all products in Shopify and blog posts in Contentful
	const result = await graphql(`
		query {
			allShopifyProduct(sort: { fields: title }) {
				nodes {
					id
					handle
				}
			}
			allShopifyCollection(filter: { handle: { ne: "frontpage" } }) {
				nodes {
					id
					handle
				}
			}
			allContentfulBlogPost {
				nodes {
					id
					title
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

	// Iterate over all collections and create a new page using a template
	// The product "handle" is generated automatically by Shopify
	result.data.allShopifyCollection.nodes.forEach(node => {
		createPage({
			path: `/products/${node.handle}`,
			component: path.resolve(`./src/templates/collection.tsx`),
			context: {
				collectionId: node.id,
			},
		});
	});

	// Iterate over all blog posts and create a new page using a template
	// The blog post title comes from the Contentful blog post
	result.data.allContentfulBlogPost.nodes.forEach(node => {
		createPage({
			path: `/blog/${node.title}`,
			component: path.resolve(`./src/templates/blogPost.tsx`),
			context: {
				articleId: node.id,
			},
		});
	});
};
