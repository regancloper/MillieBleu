require('dotenv').config();
const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MILLIE_EMAIL_ADDRESS } = process.env;
const mailgun = require('mailgun-js')({
	apiKey: MAILGUN_API_KEY,
	domain: MAILGUN_DOMAIN,
});

exports.handler = async event => {
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: 'Method Not Allowed',
			headers: { Allow: 'POST' },
		};
	}

	const data = JSON.parse(event.body);
	if (!data.name || !data.email || !data.category || !data.message) {
		return {
			statusCode: 422,
			body: 'Name, email, reason for inquiry, and message are required.',
		};
	}

	const mailgunData = {
		from: data.email,
		to: MILLIE_EMAIL_ADDRESS,
		subject: 'Millie Bleu Contact Form: ' + data.category,
		text: data.message,
	};

	try {
		await mailgun.messages().send(mailgunData);
		return {
			statusCode: 200,
			body: "Your message was sent successfully! We'll be in touch.",
		};
	} catch (err) {
		return { statusCode: 500, body: err.toString() };
	}

	// regalar promise way to send mailgun data and return object
	// return mailgun
	// 	.messages()
	// 	.send(mailgunData)
	// 	.then(() => ({
	// 		statusCode: 200,
	// 		body: "Your message was sent successfully! We'll be in touch.",
	// 	}))
	// 	.catch(err => ({
	// 		statusCode: 422,
	// 		body: err.toString(),
	// 	}));
};
