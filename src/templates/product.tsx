import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Button, Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import { useAddItemToCart } from '../context/StoreContext';
import productStyles from './product.module.scss';

interface ProductTemplateProps {
	data: {
		shopifyProduct: any;
	};
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ data }) => {
	const addItemToCart = useAddItemToCart();

	const handleAddToCart = () => {
		addItemToCart(data.shopifyProduct.variants[0].shopifyId, '1');
	};

	return (
		<Layout>
			<Container className={productStyles.container}>
				<Row>
					<Col md={6}>
						<Img
							fixed={
								data.shopifyProduct.variants[0].image.localFile.childImageSharp
									.fixed
							}
						/>
					</Col>
					<Col md={6}>
						<h1>{data.shopifyProduct.title}</h1>

						<p>{data.shopifyProduct.descriptionHtml}</p>
						<Button onClick={handleAddToCart}>Add to Cart</Button>
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
			descriptionHtml
			options {
				name
				values
			}
			variants {
				shopifyId
				selectedOptions {
					name
					value
				}
				image {
					localFile {
						childImageSharp {
							fixed(width: 250, height: 250) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
		}
	}
`;
