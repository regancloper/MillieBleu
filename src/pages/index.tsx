import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
			<AboutSection />
		</Layout>
	);
};

export default IndexPage;
