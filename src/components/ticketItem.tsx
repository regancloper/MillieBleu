import React from 'react';
import { useRemoveItemFromCart } from '../context/StoreContext';
import { Button, Row, Col } from 'react-bootstrap';

interface TicketItemProps {
	item: any;
}

const TicketItem: React.FC<TicketItemProps> = ({ item }) => {
	const removeFromCart = useRemoveItemFromCart();

	const variantImage = item.variant.image ? (
		<img
			src={item.variant.image.src}
			alt={`${item.title} product shot`}
			height="80px"
		/>
	) : null;

	return (
		<div>
			<hr />
			<Row className="align-items-center">
				<Col>
					{variantImage}
					{item.title}
				</Col>
				<Col className="text-center">
					<div className="d-flex flex-column">{item.quantity}</div>
					<Button
						variant="link"
						onClick={() => removeFromCart(item.id.toString())}
					>
						Remove
					</Button>
				</Col>
				<Col
					style={{ fontSize: '1.5rem' }}
					className="text-right"
				>{`$${item.variant.price}`}</Col>
			</Row>
		</div>
	);
};

export default TicketItem;
