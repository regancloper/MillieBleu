import React from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import Client from 'shopify-buy';

import Layout from '../components/layout';
import Head from '../components/head';
import TicketItem from '../components/ticketItem';
import {
	useCartItems,
	useCheckout,
	useCartTotals,
} from '../context/StoreContext';
import EmptyCart from '../components/emptyCart';
import cartStyles from './cart.module.scss';

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = () => {
	const lineItems: Client.LineItem[] = useCartItems();
	const { subtotal } = useCartTotals();

	const checkout = useCheckout();

	return lineItems.length < 1 ? (
		<EmptyCart />
	) : (
		<Layout>
			<Head title="Cart" />
			<Container className="my-5">
				<div className={cartStyles.copenhagen}>what's in</div>
				<h3 className={cartStyles.header}>Your Cart</h3>
				<Row className={`${cartStyles.descriptionHeader} d-none d-md-flex`}>
					<Col xs={6}>PRODUCT</Col>
					<Col className="text-center">QUANTITY</Col>
					<Col className="text-right">TOTAL</Col>
				</Row>
				{lineItems.map(item => (
					<TicketItem key={item.id} item={item} />
				))}
				<hr style={{ marginTop: 0 }} />
				<Row>
					<Col xs={12} md={{ span: 6, offset: 6 }} lg={{ span: 4, offset: 8 }}>
						<Card
							style={{
								backgroundColor: '#f6f6f6',
								border: 'none',
								borderRadius: 0,
							}}
						>
							<Card.Body>
								<Card.Title>Cart Summary</Card.Title>
								<hr />
								<div className="d-flex justify-content-between">
									<span>Subtotal:</span>
									<span>{subtotal}</span>
								</div>
								<div className="d-flex justify-content-between align-items-center">
									<span>Shipping:</span>
									<span
										style={{
											fontSize: '.7em',
											fontStyle: 'italic',
										}}
									>
										Calculated at checkout
									</span>
								</div>
								<div className="d-flex justify-content-between align-items-center">
									<span>Tax:</span>
									<span
										style={{
											fontSize: '.7em',
											fontStyle: 'italic',
										}}
									>
										Calculated at checkout
									</span>
								</div>
								<hr />
								<div className="d-flex justify-content-between font-weight-bold mb-4">
									<span>Estimated Total:</span>
									<span>{subtotal}</span>
								</div>
								<Button block variant="dark" onClick={checkout}>
									Checkout
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default CartPage;
