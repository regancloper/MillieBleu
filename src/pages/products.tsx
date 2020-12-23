import React from 'react';
import { Link, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Container, Card, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import Head from '../components/head';
import productsStyles from './products.module.scss';

interface ProductsPageProps {
	data: {
		allShopifyCollection: {
			nodes: {
				id: string;
				handle: string;
				title: string;
				image: any;
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
					<h3 className={productsStyles.header}>Shop Our Collections</h3>
				</div>
				<Row className="justify-content-center">
					{data.allShopifyCollection.nodes.map(node => (
						<Col
							// xs={12}
							sm={6}
							lg={4}
							key={node.handle}
							className="m-2"
						>
							<Card className={productsStyles.card}>
								<Card.Title className={productsStyles.cardTitle}>
									{node.title} Collection
								</Card.Title>
								<BackgroundImage
									className={productsStyles.cardPicture}
									fluid={node.image.localFile.childImageSharp.fluid}
								>
									<div className={productsStyles.overlay}>
										<Link
											to={`/products/${node.handle}`}
											className={productsStyles.button}
										>
											Shop Collection
										</Link>
									</div>
								</BackgroundImage>
							</Card>
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
		allShopifyCollection(
			filter: { handle: { ne: "frontpage" } }
			sort: { fields: handle, order: ASC }
		) {
			nodes {
				id
				handle
				title
				image {
					localFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
`;
