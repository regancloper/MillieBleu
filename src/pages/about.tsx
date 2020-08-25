import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout';
import Head from '../components/head';
import aboutStyles from './about.module.scss';
import { Container } from 'react-bootstrap';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
	const imageData = useStaticQuery(graphql`
		query {
			aboutImage: file(relativePath: { eq: "office.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2400) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="About" />
			<BackgroundImage
				className={aboutStyles.picture}
				fluid={imageData.aboutImage.childImageSharp.fluid}
			>
				<div className={aboutStyles.pictureText}>About Us</div>
			</BackgroundImage>
			<Container className={aboutStyles.text}>
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
