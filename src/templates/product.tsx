import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Button, Container, Row, Col, Spinner } from 'react-bootstrap';

import Layout from '../components/layout';
import { useAddItemToCart } from '../context/StoreContext';
import productStyles from './product.module.scss';

interface ProductTemplateProps {
	data: {
		shopifyProduct: any;
	};
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ data }) => {
	const [loading, setLoading] = useState(false);
	const [currentPicture, setCurrentPicture] = useState(0);

	const addItemToCart = useAddItemToCart();

	const handleAddToCart = () => {
		addItemToCart(data.shopifyProduct.variants[0].shopifyId, '1', setLoading);
	};

	return (
		<Layout>
			<Container className={productStyles.container}>
				<Row>
					<Col lg={7} className="mb-3">
						<Row>
							<Col xs={12} className="mb-3">
								<Img
									fluid={
										data.shopifyProduct.images[currentPicture].localFile
											.childImageSharp.fluid
									}
									style={{ maxHeight: 600 }}
								/>
							</Col>
							{data.shopifyProduct.images.map((image: any, index: number) => (
								<Col
									xs={2}
									key={index}
									onClick={() => setCurrentPicture(index)}
								>
									<Img
										fluid={image.localFile.childImageSharp.fluid}
										className={`${productStyles.picture} ${
											currentPicture === index && productStyles.selectedPicture
										}`}
									/>
								</Col>
							))}
						</Row>
					</Col>
					<Col lg={5}>
						<h1 className={productStyles.title}>{data.shopifyProduct.title}</h1>
						<div className="mb-5">${data.shopifyProduct.variants[0].price}</div>
						{loading ? (
							<Button
								variant="secondary"
								disabled
								block
								style={{
									fontWeight: 200,
									borderRadius: 0,
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
								onClick={handleAddToCart}
								block
								variant="outline-secondary"
								style={{
									fontWeight: 200,
									borderRadius: 0,
								}}
							>
								Add to Cart
							</Button>
						)}
						<hr />
						<p className={productStyles.descriptionHeader}>
							PRODUCT DESCRIPTION
						</p>
						<p className={productStyles.description}>
							{data.shopifyProduct.description}
						</p>
						<hr />
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default ProductTemplate;

export const ProductPageQuery = graphql`
	query($productId: String!) {
		shopifyProduct(id: { eq: $productId }) {
			id
			title
			description
			variants {
				price
				shopifyId
				selectedOptions {
					name
					value
				}
			}
			images {
				localFile {
					childImageSharp {
						fluid(maxWidth: 2400) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
