import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Card, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import Head from '../components/head';
import productsStyles from './products.module.scss';

interface ProductsPageProps {
	data: {
		// allShopifyProduct: {
		// 	nodes: {
		// 		title: any;
		// 		description: any;
		// 		handle: any;
		// 		images: any;
		// 		priceRange: any;
		// 	}[];
		// };
		allShopifyCollection: {
			nodes: {
				id: string;
				handle: string;
				title: string;
			}[];
		};
	};
}

const ProductsPage: React.FC<ProductsPageProps> = ({ data }) => {
	return (
		<Layout>
			<Head title="Products" />
			<Container className="my-5">
				<div>
					<div className={productsStyles.copenhagen}>look around</div>
					<h3 className={productsStyles.header}>Shop Our Collection</h3>
				</div>
				<Row className="justify-content-center">
					{data.allShopifyCollection.nodes.map(node => (
						<Col
							// xs={12}
							sm={6}
							lg={4}
							key={node.handle}
							className="my-2"
						>
							<Card border="0">
								<div className="text-center">{node.title}</div>
							</Card>
						</Col>
					))}
				</Row>
				{/* <Row>
					{data.allShopifyProduct.nodes.map(node => (
						<Col
							// xs={12}
							sm={6}
							lg={4}
							key={node.handle}
							className="my-2"
						>
							<Link
								to={`/product/${node.handle}`}
								className={productsStyles.link}
							>
								<Card border="0">
									<Img
										fluid={node.images[0].localFile.childImageSharp.fluid}
										className={productsStyles.picture}
									/>
									<h3 className={productsStyles.productTitle}>{node.title}</h3>
									<p>
										${Number(node.priceRange.maxVariantPrice.amount).toFixed(2)}
									</p>
								</Card>
							</Link>
						</Col>
					))}
				</Row> */}
			</Container>
		</Layout>
	);
};

export default ProductsPage;

export const query = graphql`
	query {
		allShopifyCollection(filter: { handle: { ne: "frontpage" } }) {
			nodes {
				id
				handle
				title
			}
		}
	}
`;

// export const query = graphql`
// 	query {
// 		allShopifyProduct(sort: { fields: publishedAt, order: ASC }) {
// 			nodes {
// 				title
// 				handle
// 				images {
// 					localFile {
// 						childImageSharp {
// 							fluid(maxWidth: 800) {
// 								...GatsbyImageSharpFluid
// 							}
// 						}
// 					}
// 				}
// 				priceRange {
// 					maxVariantPrice {
// 						amount
// 						currencyCode
// 					}
// 				}
// 			}
// 		}
// 	}
// `;
