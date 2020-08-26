import React, { useState } from 'react';
import { useRemoveItemFromCart } from '../context/StoreContext';
import { Button, Row, Col, Spinner } from 'react-bootstrap';

import ticketItemStyles from './ticketItem.module.scss';

interface TicketItemProps {
	item: any;
}

const TicketItem: React.FC<TicketItemProps> = ({ item }) => {
	const [loading, setLoading] = useState(false);

	const removeFromCart = useRemoveItemFromCart();

	const variantImage = item.variant.image ? (
		<img
			className={ticketItemStyles.picture}
			src={item.variant.image.src}
			alt={`${item.title} product shot`}
		/>
	) : null;

	const handleRemoval = () => {
		setLoading(true);
		removeFromCart(item.id.toString());
	};

	return (
		<div>
			<hr style={{ margin: 0 }} />
			<Row className="align-items-center">
				<Col xs={5} md={6}>
					{variantImage}
					<span className="d-none d-md-inline ml-3 font-weight-light">
						{item.title}
					</span>
				</Col>
				<Col xs={7} md={3} className="text-center">
					<div className="d-inline d-md-none font-weight-light">
						{item.title}
					</div>
					<div className="mb-2" style={{ fontWeight: 200 }}>
						<span className="d-inline d-md-none font-weight-light">(</span>
						{item.quantity}
						<span className="d-inline d-md-none font-weight-light">
							) ${(item.variant.price * item.quantity).toFixed(2)}
						</span>
					</div>

					{loading ? (
						<Button
							variant="secondary"
							disabled
							style={{
								fontWeight: 200,
								borderRadius: 0,
								paddingLeft: 32,
								paddingRight: 32,
							}}
						>
							<Spinner
								as="span"
								animation="border"
								size="sm"
								role="status"
								aria-hidden="true"
							/>
						</Button>
					) : (
						<Button
							variant="outline-secondary"
							style={{
								fontWeight: 200,
								borderRadius: 0,
							}}
							onClick={handleRemoval}
						>
							Remove
						</Button>
					)}
				</Col>
				<Col
					xs={6}
					md={3}
					style={{ fontWeight: 200 }}
					className="text-right d-none d-md-block"
				>{`$${(item.variant.price * item.quantity).toFixed(2)}`}</Col>
			</Row>
		</div>
	);
};

export default TicketItem;
