import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/contactForm';

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
				<ContactForm />
			</Container>
		</Layout>
	);
};

export default ContactPage;
