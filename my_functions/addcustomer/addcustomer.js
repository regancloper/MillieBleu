const axios = require('axios');
require('dotenv').config();

exports.handler = async event => {
	const API_URL = `https://${process.env.SHOP_NAME}.myshopify.com/admin/api/2020-10/customers.json`;
	const body = JSON.parse(event.body);

	const customerData = {
		customer: {
			email: body.email,
			accepts_marketing: true,
			first_name: null,
			last_name: null,
			marketing_opt_in_level: 'single_opt_in',
			tags: 'newsletter',
		},
	};

	try {
		let response = await axios({
			method: 'post',
			url: API_URL,
			data: customerData,
			headers: {
				'Content-type': 'application/json',
				Authorization:
					'Basic ' +
					Buffer.from(
						process.env.SHOPIFY_ADMIN_API_KEY +
							':' +
							process.env.SHOPIFY_ADMIN_PASSWORD
					).toString('base64'),
			},
		});
		let data = response.data;
		return {
			statusCode: 201,
			body: JSON.stringify(data),
		};
	} catch (err) {
		if (err.message === 'Request failed with status code 422') {
			return { statusCode: 422, body: err.toString() };
		} else {
			return { statusCode: 500, body: err.toString() };
		}
	}
};
