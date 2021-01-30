import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import featuredStyles from './featuredItems.module.scss';

interface FeaturedItemsProps {}

const FeaturedItems: React.FC<FeaturedItemsProps> = () => {
	const data = useStaticQuery(graphql`
		query allProducts {
			allShopifyProduct(sort: { fields: publishedAt, order: DESC }, limit: 4) {
				nodes {
					title
					handle
					images {
						localFile {
							childImageSharp {
								fluid(maxWidth: 220) {
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
	`);

	return (
		<Container fluid style={{ backgroundColor: '#f1f3f2' }}>
			<Container className="pb-5">
				<div className="d-flex flex-column justify-content-center align-items-center py-5">
					<div className={featuredStyles.copenhagen}>What's New</div>
					<h1 className={featuredStyles.header}>Featured Items</h1>
				</div>
				<Row>
					{data.allShopifyProduct.nodes.map((product: any) => (
						<Col key={product.handle} sm={6} md={4} lg={3}>
							<Link
								to={`/product/${product.handle}`}
								className={featuredStyles.link}
							>
								<Card border="light" className={featuredStyles.card}>
									<Img
										fluid={product.images[0].localFile.childImageSharp.fluid}
										className={featuredStyles.picture}
									/>
									<Card.Body className="d-flex flex-column justify-content-center align-items-center">
										<Card.Title className={featuredStyles.titleText}>
											{product.title}
										</Card.Title>

										<div className="d-flex justify-content-center align-items-center">
											<FontAwesomeIcon icon={faArrowRight} />
										</div>
									</Card.Body>
								</Card>
							</Link>
						</Col>
					))}
				</Row>
			</Container>
		</Container>
	);
};

export default FeaturedItems;
