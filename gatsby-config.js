require('dotenv').config({
	path: `.env`,
});

module.exports = {
	siteMetadata: {
		title: 'Millie Bleu',
		description: `Check out my Millie Bleu online store powered by Shopify.`,
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
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/sitelogo.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`taviraj\:200,400`],
				display: 'swap',
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				custom: {
					families: ['Copenhagen'],
					urls: ['/fonts/fonts.css'],
				},
			},
		},
	],
};
