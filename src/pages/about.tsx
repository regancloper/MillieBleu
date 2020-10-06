import React from 'react';
import { Container } from 'react-bootstrap';

import Layout from '../components/layout';
import Head from '../components/head';
import aboutStyles from './about.module.scss';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
	return (
		<Layout>
			<Head title="About" />
			<Container className={aboutStyles.text}>
				<div className="my-5 text-center">
					<div className={aboutStyles.copenhagen}>who we are</div>
					<h3 className={aboutStyles.header}>About Us</h3>
				</div>
				<p>
					Insert a section here about the business, its mission, and its
					founders, etc.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</Container>
		</Layout>
	);
};

export default AboutPage;
