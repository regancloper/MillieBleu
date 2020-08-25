import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
	return (
		<Layout>
			<Head title="404" />
			<h1>Page Not Found</h1>
			<p>
				<Link to="/">Back to home</Link>
			</p>
		</Layout>
	);
};

export default NotFound;
