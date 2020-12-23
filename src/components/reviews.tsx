import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout';
import Head from '../components/head';
import reviewStyles from './reviews.module.scss';
import { Container } from 'react-bootstrap';

interface ReviewPageProps {}

const ReviewPage: React.FC<ReviewPageProps> = () => {
	const imageData = useStaticQuery(graphql`
		query {
			reviewImage: file(relativePath: { eq: "reviews.jpg" }) {
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
			<Head title="Reviews" />
			<BackgroundImage
				className={reviewStyles.picture}
				fluid={imageData.reviewImage.childImageSharp.fluid}
				backgroundColor={`#040e18`}
			>
				<div className={reviewStyles.pictureText}>Reviews</div>
			</BackgroundImage>
			<Container className={reviewStyles.text}>
				<p>Insert reviews from customers here!</p>
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

export default ReviewPage;
