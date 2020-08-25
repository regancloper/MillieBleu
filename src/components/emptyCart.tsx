import React from 'react';
import { Container, Badge } from 'react-bootstrap';

import Layout from './layout';
import emptyCartStyles from './emptyCart.module.scss';
import { Link } from 'gatsby';

interface EmptyCartProps {}

const EmptyCart: React.FC<EmptyCartProps> = () => {
	return (
		<Layout>
			<Container className={emptyCartStyles.container}>
				<div className={emptyCartStyles.text}>Your Cart Is Empty</div>
				<Link to="/products" className={emptyCartStyles.link}>
					<div className={emptyCartStyles.badge}>Shop Our Collection</div>
				</Link>
			</Container>
		</Layout>
	);
};

export default EmptyCart;
