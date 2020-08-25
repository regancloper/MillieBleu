require('dotenv').config({
	path: `.env`,
});

module.exports = {
	siteMetadata: {
		title: 'Millie Bleu',
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `Regan Loper`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-shopify`,
			options: {
				// The domain name of your Shopify shop.
				shopName: process.env.SHOP_NAME,

				// The storefront access token
				accessToken: process.env.SHOP_TOKEN,
				apiVersion: '2020-07',
			},
		},
		{
			// This plugin lets me access environment variables that
			// aren't prefixed with Gatsby. This allows me to use
			// Shopify-related variables in the context setup script.
			resolve: `gatsby-plugin-env-variables`,
			options: {
				allowList: ['SHOP_NAME', 'SHOP_TOKEN'],
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
	],
};
