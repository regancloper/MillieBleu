import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';

import contactFormStyles from './contactForm.module.scss';

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [category, setCategory] = useState('');
	const [message, setMessage] = useState('');
	const [alertText, setAlertText] = useState('');
	const [loading, setLoading] = useState(false);

	const submitMessage = async (event: React.FormEvent<HTMLFormElement>) => {
		setLoading(true);
		event.preventDefault();
		const body = {
			name,
			email,
			category,
			message,
		};

		try {
			let result = await fetch(
				'/.netlify/functions/contactowner/contactowner.js',
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(body),
				}
			);
			let feedback = await result.text();
			setAlertText(feedback);
		} catch (e) {
			console.log(e);
			throw e;
		} finally {
			setName('');
			setEmail('');
			setCategory('');
			setMessage('');
			setLoading(false);
		}
	};
	return (
		<div className={contactFormStyles.form}>
			<form onSubmit={submitMessage}>
				<div className="row">
					<div className="col-12 col-md-6 mb-3">
						<input
							type="text"
							className="form-control rounded-0"
							placeholder="Your name"
							style={{ fontWeight: 200 }}
							required
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="col-12 col-md-6 mb-3">
						<input
							type="email"
							className="form-control rounded-0"
							placeholder="Your email address"
							style={{ fontWeight: 200 }}
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<select
					className="custom-select rounded-0 mb-3"
					style={{ fontWeight: 200 }}
					required
					value={category}
					onChange={e => setCategory(e.target.value)}
				>
					<option value="" disabled>
						Reason for Your Inquiry
					</option>
					<option value="Returns/Exchanges">
						I want to make a return or exchange.
					</option>
					<option value="Damaged/Incorrect">
						The order I received was damaged, incorrect, or incomplete.
					</option>
					<option value="Feedback">
						I have feedback to provide on Millie Bleu.
					</option>
					<option value="International">
						I want to place an international order.
					</option>
				</select>
				<textarea
					className="form-control rounded-0 mb-5"
					placeholder="Your message"
					rows={7}
					style={{ fontWeight: 200 }}
					required
					value={message}
					onChange={e => setMessage(e.target.value)}
				></textarea>
				<div className="d-flex justify-content-center">
					<button
						className="btn p-2 w-75 rounded-0"
						style={{
							backgroundColor: '#6b8bbb',
							color: '#fff',
							fontWeight: 100,
						}}
						type="submit"
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
							'Send Message'
						)}
					</button>
				</div>
				{alertText && (
					<Alert
						variant="secondary"
						onClose={() => setAlertText('')}
						dismissible
						transition
						className="rounded-0"
						style={{
							fontWeight: 200,
							width: '75%',
							margin: '1em auto 0 auto',
						}}
					>
						{alertText}
					</Alert>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
