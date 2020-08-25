import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import Head from '../components/head';
import productsStyles from './products.module.scss';

interface ProductsPageProps {
	data: {
		allShopifyProduct: {
			nodes: {
				title: any;
				description: any;
				handle: any;
				images: any;
				priceRange: any;
			}[];
		};
	};
}

const ProductsPage: React.FC<ProductsPageProps> = ({ data }) => {
	return (
		<Layout>
			<Head title="Products" />
			<Container>
				<div className="mt-5">
					<h3 className={productsStyles.header}>Shop Our Collection</h3>
				</div>
				<Row>
					{data.allShopifyProduct.nodes.map(node => (
						<Col
							xs={12}
							sm={6}
							lg={4}
							key={node.handle}
							className="d-flex flex-column align-items-center pt-5"
						>
							<Img fixed={node.images[0].localFile.childImageSharp.fixed} />
							<h3>
								<Link to={`/product/${node.handle}`}>{node.title}</Link>
							</h3>
							<small>
								${Number(node.priceRange.maxVariantPrice.amount).toFixed(2)}
							</small>
							<p>{node.description}</p>
						</Col>
					))}
				</Row>
			</Container>
		</Layout>
	);
};

export default ProductsPage;

export const query = graphql`
	query {
		allShopifyProduct {
			nodes {
				title
				description
				handle
				images {
					localFile {
						childImageSharp {
							fixed(width: 250, height: 250) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
				priceRange {
					maxVariantPrice {
						amount
						currencyCode
					}
				}
			}
		}
	}
`;
