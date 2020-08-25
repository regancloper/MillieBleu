import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import FeaturedItems from '../components/featuredItems';
import Carousel from '../components/carousel';
import AboutSection from '../components/aboutSection';

interface IndexPageProps {
	data: any;
}

export const IndexPage: React.FC<IndexPageProps> = () => {
	return (
		<Layout>
			<Head title="Home" />
			<Carousel />
			<FeaturedItems />
			{/* <BackgroundImage
				className={HomeStyles.masthead}
				fluid={props.data.indexImage.childImageSharp.fluid}
			>
				<Link to="/products" className="btn btn-light">
					Shop All
				</Link>
			</BackgroundImage> */}
			<AboutSection />
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		indexImage: file(relativePath: { eq: "masthead.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 2400) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
