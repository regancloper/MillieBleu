import React from 'react';
import { Container } from 'react-bootstrap';

import Head from '../components/head';
import Layout from '../components/layout';
import contactStyles from './contact.module.scss';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
	return (
		<Layout>
			<Head title="Contact Us" />
			<Container>
				<div className="my-5 text-center">
					<div className={contactStyles.copenhagen}>reach out</div>
					<h3 className={contactStyles.header}>Contact Us</h3>
				</div>
				<form
					action="https://getform.io/f/5a6d3838-3043-4da1-9e69-ad5634c71ed5"
					method="POST"
				>
					<input type="text" name="name" />
					<input type="email" name="email" />
					<input type="text" name="message" />
					<button type="submit">Send</button>
				</form>
			</Container>
		</Layout>
	);
};

export default ContactPage;
