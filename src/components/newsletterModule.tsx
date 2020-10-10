import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';

interface NewsletterModuleProps {}

const NewsletterModule: React.FC<NewsletterModuleProps> = () => {
	const [email, setEmail] = useState('');
	const [showAlert, setShowAlert] = useState(false);
	const [emailSuccessMessage, setEmailSuccessMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const submitEmail = async (event: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		event.preventDefault();
		const body = {
			email: email,
		};

		try {
			let result = await fetch(
				'/.netlify/functions/addcustomer/addcustomer.js',
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(body),
				}
			);
			if (result.status === 201) setEmailSuccessMessage('Email added!');
			else if (result.status === 422)
				setEmailSuccessMessage('That email is already subscribed!');
			else setEmailSuccessMessage('Something went wrong.');
		} catch (e) {
			setEmailSuccessMessage('Something went wrong.');
			throw e;
		} finally {
			setShowAlert(true);
			setLoading(false);
		}
	};

	return (
		<form onSubmit={submitEmail}>
			<div style={{ marginBottom: '1em' }}>
				Subscribe to receive updates on Millie Bleu, access to exclusive deals,
				and more.
			</div>
			<div className="form-group mb-2">
				<input
					type="email"
					className="form-control rounded-0"
					placeholder="Email address"
					required
					onChange={e => setEmail(e.target.value)}
					value={email}
					style={{ fontWeight: 200, width: '80%' }}
				/>
			</div>

			<button
				type="submit"
				className="btn btn-secondary mb-2 rounded-0"
				style={{ fontWeight: 200, width: 160 }}
				disabled={loading}
			>
				{loading ? (
					<Spinner
						as="span"
						animation="border"
						size="sm"
						role="status"
						aria-hidden="true"
					/>
				) : (
					'Subscribe'
				)}
			</button>

			{showAlert && (
				<Alert
					variant="secondary"
					onClose={() => setShowAlert(false)}
					dismissible
					transition
					className="rounded-0"
					style={{ fontWeight: 200, width: '80%' }}
				>
					{emailSuccessMessage}
				</Alert>
			)}
		</form>
	);
};

export default NewsletterModule;
