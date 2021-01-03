import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Head from '../components/head';
import styles from './collection.module.scss';

interface CollectionProps {
	data: {
		shopifyCollection: {
			title: string;
			handle: string;
			products: {
				title: string;
				handle: string;
				availableForSale: boolean;
				images: any;
				priceRange: any;
			}[];
		};
	};
}

const Collection: React.FC<CollectionProps> = ({ data }) => {
	return (
		<Layout>
			<Head title="Collections" />
			<Container className="my-5">
				<div>
					<div className={styles.copenhagen}>
						{data.shopifyCollection.title}
					</div>
					<h3 className={styles.header}>Collection</h3>
				</div>
				<Row>
					{data.shopifyCollection.products.map(node => {
						if (node.availableForSale)
							return (
								<Col
									// xs={12}
									sm={6}
									lg={4}
									key={node.handle}
									className="my-2"
								>
									<Link to={`/product/${node.handle}`} className={styles.link}>
										<Card border="0">
											<Img
												fluid={node.images[0].localFile.childImageSharp.fluid}
												className={styles.picture}
											/>
											<h3 className={styles.productTitle}>{node.title}</h3>
											<p>
												$
												{Number(node.priceRange.maxVariantPrice.amount).toFixed(
													2
												)}
											</p>
										</Card>
									</Link>
								</Col>
							);
						return null;
					})}
				</Row>
			</Container>
		</Layout>
	);
};

export default Collection;

export const CollectionQuery = graphql`
	query($collectionId: String!) {
		shopifyCollection(id: { eq: $collectionId }) {
			title
			handle
			products {
				title
				handle
				availableForSale
				images {
					localFile {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
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
